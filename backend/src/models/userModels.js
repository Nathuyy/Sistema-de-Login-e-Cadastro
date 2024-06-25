const connection = require('./connection');

const getAllUsers = async () => {
    const [users] = await connection.execute('SELECT * FROM users');
    return users;
}

const registerUser = async (user) => {
    const { username, email, password } = user;
    const dateUTC = new Date(Date.now()).toISOString().slice(0, 19).replace('T', ' '); // Formato MySQL DATETIME

    const query = 'INSERT INTO users (username, email, password, created_at) VALUES (?, ?, ?, ?)'
    const [result] = await connection.execute(query, [username, email, password, dateUTC]);

    return {
        id: result.insertId,
        username,
        email,
        created_at: dateUTC,
    };
}

const deleteUser = async (id) => {
    const removeUser = await connection.execute('DELETE FROM users WHERE id = ?', [id]);
    return removeUser
}
module.exports = {
    getAllUsers,
    registerUser,
    deleteUser
};