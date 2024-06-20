const express = require('express')
const db = require('../models/connection')

const bcrypt = require('bcryptjs')

const VerifyEmail = async (req, res, next) => {
    next()
    // return res.status(200).json({ message: 'fazer verificação de email e senha!' })
    //estamos registrando, precisa saber se existe um email existente, se existir ele retorna uma mensagem, caso contrário next
    //utilize a pasta tools para encripitar a senha
}


module.exports = {
    VerifyEmail
}