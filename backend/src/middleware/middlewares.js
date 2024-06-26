const connection = require('../models/connection');

const VerifyEmail = async (req, res, next) => {
    const { email } = req.body;

    try {
        const [user] = await connection.execute('SELECT * FROM users WHERE email = ?', [email]);
        if (user.length > 0) {
            return res.status(400).json({ error: 'Email já existe' });
        }
        next();
    } catch (error) {
        return res.status(500).json({ error: 'Internal Server Error' });
    }
};

const VerifyLogin = async (req, res, next) => {
    const { email, password } = req.body;

    try {
        const [user] = await connection.execute('SELECT * FROM users WHERE email = ? AND password = ?', [email, password]);
        if (user.length === 0) {
            return res.status(400).json({ error: 'Email ou senha inválidos' });
        }
        next();
    } catch (error) {
        return res.status(500).json({ error: 'Internal Server Error' });
    }
};

const middlewareCheckId = async (req, res, next) => {
    const checkID = req.params.id;

    if (checkID === "1" || checkID === "2") {
        next();
    } else {
        return res.status(400).json({ message: "Você não é um administrador" });
    }
};

module.exports = {
    VerifyEmail,
    VerifyLogin, 
    middlewareCheckId
};
