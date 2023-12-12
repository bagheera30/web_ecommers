import bcrypt from 'bcrypt';
const {
    findUsersByid,
    insertUsers,
    editUsers
} = require('./users.repository')

const createUsers = async (usersData: any) => {
    usersData.password = await bcrypt.hash(usersData.password, 10);
    const users = await insertUsers(usersData)
    return users
}

const editUsersByname = async (usersData: any) => { }


module.exports = {
    createUsers,
    editUsersByname
}