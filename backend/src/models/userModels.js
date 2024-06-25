const connection = require('./connection');
const bcrypt = require('bcryptjs');

const getAllUsers = async () => {
    const [users] = await connection.execute('SELECT * FROM users');
    return users;
}

const registerUser = async (user) => {
    const { username, email, password } = user;
    const dateUTC = new Date(Date.now()).toISOString().slice(0, 19).replace('T', ' '); // Formato MySQL DATETIME

    const hashedPassword = await bcrypt.hash(password, 10);

    const query = 'INSERT INTO users (username, email, password, created_at) VALUES (?, ?, ?, ?)'
    const [result] = await connection.execute(query, [username, email, hashedPassword, dateUTC])

    return {
        id: result.insertId,
        username,
        email,
        created_at: dateUTC,
    };
}

const loginUser = async (user) => {
    const { email, password } = user
    const query = 'SELECT * FROM users WHERE email = ?'

    const [result] = await connection.execute(query, [email])
    if (result.length === 0) {
        throw new Error('Email ou senha são inválidos')
    }

    const userRecord = result[0];
    const passwordMatch = await bcrypt.compare(password, userRecord.password)

    if (!passwordMatch) {
        throw new Error('Email ou senha são inválidos')
    }

    return `logado com sucesso: ${userRecord.username}`
}


const deleteUser = async (id) => {
    const removeUser = await connection.execute('DELETE FROM users WHERE id = ?', [id])
    return removeUser
}

const uptadeUser = async (id, user) => {
    const { username, email, password } = user

    const query = 'UPDATE users SET username = ?, email = ?, password = ? WHERE id = ?';

    const [uptadedUser] = await connection.execute(query, [username, email, password, id])
    return uptadedUser
}


module.exports = {
    getAllUsers,
    registerUser,
    deleteUser,
    loginUser,
    uptadeUser
};