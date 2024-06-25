const userModels = require('../models/userModels');

const getAllUsers = async (req, res) => {
    const users = await userModels.getAllUsers();   
    res.status(200).json(users);
};

const registerUser = async (req, res) => {
    const newUser = await userModels.registerUser(req.body);
    res.status(201).json(newUser);
}

const deleteUser = async (req, res) => {
    const { id } = req.params;

    await userModels.deleteUser(id);
    return res.status(204).json();
}

module.exports = {
    getAllUsers,
    registerUser,
    deleteUser
};