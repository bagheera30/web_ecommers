import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
const {
    findUsersByUsername,
    insertUsers,
    editUsers,
    fiindAllUsers
} = require('./users.repository')
const getAllUsers = async () => {
    const users = await fiindAllUsers();
    return users;
}
const createUser = async (userData: any) => {
    const hashedPassword = await bcrypt.hash(userData.password, 10);
    const user = await insertUsers({
        ...userData,
        password: hashedPassword,
    });
    return user;
};
const loginUser = async (username: string, password: string) => {
    const user = await findUsersByUsername(username);
    if (!user) {
        throw new Error('User not found');
    }
    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
        throw new Error('Invalid password');
    }
    const token = jwt.sign({ userId: user.userId }, 'your_jwt_secret');
    return token;
};
const editUsersByname = async (username: string, userData: any) => {
    await getuserByusername(username);
    const user = await editUsers(username, userData);
    return user;
}
const getuserByusername = async (username: string) => {
    const user = findUsersByUsername(username);
    if (!user) {
        throw new Error(`User ${username} not found`);
    }
    return user;
}
module.exports = {
    createUser,
    loginUser,
    editUsersByname,
    getAllUsers
}