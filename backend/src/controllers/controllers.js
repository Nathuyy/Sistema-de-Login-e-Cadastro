const db = require('../models/connection')
const bcrypt = require('bcryptjs')


// const validatePassword = (password) => { //passar para o middleware? SIM, enviar para o middleware, ele não retorna nada além de um next
//     const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
//     return passwordRegex.test(password);
// };


const register = async (req, res) => {

    const { username, email, password } = req.body
    return res.status(200).json({ message: username, email, password })
}



const login = async (req, res) => {
    return res.status(200).json({ message: 'fazer login!' })
    //comparar se email existe, após verificar se o email existe verificar se a senha (ja cripiada) bate com a senha (encriptada)
    //o bcrypt vai comparar a senha e a criptografia com uma função dele própria,


}

const Void = async (req, res) => {
    return res.status(200).json({ message: 'Servidor funcionando corretamente!' })
}


module.exports = {
    Void,
    login,
    register
}