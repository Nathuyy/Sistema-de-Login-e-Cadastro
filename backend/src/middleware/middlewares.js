const express = require('express')
const db = require('../models/connection')

const connection = require('../models/connection')

const VerifyEmail = async (req, res, next) => {
    const { email } = req.body

    const user = await connection.execute('SELECT * FROM users WHERE email = ?', [email])

    if(user.length > 0) {
        return res.status(400).json({ error: 'Email ja existe' })
    }
    next()
}

const VerifyLogin = async (req, res, next) => {
    const { email, password } = req.body

    const user = await connection.execute('SELECT * FROM users WHERE email = ?, password = ?', [email, password])

    if(user.length === 0) {
        return res.status(400).json({ error: 'Email ou senha inválidos' })
    }
    next()
}

const isAdmin = async (req, res, next) => {
    const { userId } = req.user
        const adminId = parseInt(req.params.adminId)

        if (userId === adminId && adminId === 1) {
            next();
        } else {
            return res.status(401).json({ error: 'Unauthorized' });
        }

}

module.exports = {
    VerifyEmail,
    VerifyLogin, 
    isAdmin
}