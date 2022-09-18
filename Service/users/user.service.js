require('dotenv').config(); 
const jwt = require('jsonwebtoken')
const Role = require('../../Helpers/role')

const users = [
    { id: 1, username: 'admin', password: 'admin', firstName: 'Admin', lastName: 'User', role: Role.Admin },
    { id: 2, username: 'user', password: 'user', firstName: 'Normal', lastName: 'User', role: Role.User }
];


async function authenticate({ username, password }) {
    console.log(process.env.TOKEN_KEY)
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
        const token = jwt.sign(
            { user_id: user.id,user_role:user.role },
            process.env.TOKEN_KEY,
        );
        const { password, ...userWithoutPassword } = user;
        return {
            ...userWithoutPassword,
            token
        };
    }
}

async function getAll() {
    return users.map(u => {
        const { password, ...userWithoutPassword } = u;
        return userWithoutPassword;
    });
}

async function getById(id) {
    const user = users.find(u => u.id === parseInt(id));
    if (!user) return;
    const { password, ...userWithoutPassword } = user;
    return userWithoutPassword;
}



module.exports = {
    authenticate,
    getAll,
    getById
};