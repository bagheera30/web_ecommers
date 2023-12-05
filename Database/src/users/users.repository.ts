export { }
const db = require("../libs/db");
import bcrypt from 'bcrypt';

const prisma = db.getInstance();


const findUsersByid = async (id: string) => {
    const user = await prisma.Users.findUnique({
        where: {
            userId: id,
        },
    });
    return user;
}

const insertUsers = async (usersData: any) => {

    const users = await prisma.Users.create({
        data: {
            name: usersData.name,
            username: usersData.username,
            password: usersData.password,
            nomerWA: usersData.nomerWA,
        },
    });
    return users;
}
const editUsers = async (username: string, usersData: any) => {
    const users = await prisma.Users.update({
        where: {
            username: username,
        },
        data: {
            name: usersData.name,
            username: usersData.username,
            password: usersData.password,
            nomerWA: usersData.nomerWA,
        },
    });
    return users;
}
module.exports = {
    findUsersByid,
    insertUsers,
    editUsers,
}