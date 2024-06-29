const userModels = require('../models/userModels')

const getAllUsers = async (req, res) => {
    const users = await userModels.getAllUsers()
    res.status(200).json(users)
};

const registerUser = async (req, res) => {
    const newUser = await userModels.registerUser(req.body)
    res.status(201).json(newUser)
}

const deleteUser = async (req, res) => {
    const { idUser } = req.params

    await userModels.deleteUser(idUser)
    return res.status(204).json()
}

const loginUser = async (req, res) => { 
    const login = await userModels.loginUser(req.body)
    res.json(login);
}

const uptadeUser = async (req, res) => {
    const {id} = req.params
    await userModels.uptadeUser(id, req.body)
    return res.status(204).json()
}

module.exports = {
    getAllUsers,
    registerUser,
    deleteUser,
    loginUser,
    uptadeUser
};