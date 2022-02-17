const Users = require('../models/usersModel');

exports.getAllUsers = async (req, res, next) => {
    try {
        const [allUsers] = await Users.fetchAll();
        res.status(200).send(allUsers);
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
}
exports.createUser = async (req, res, next) => {
    try {
        const postResponse = await Users.createNew(req.body.fName, req.body.lName, req.body.age);
        res.status(200).json(postResponse);
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
}
exports.singelUser = async (req, res, next) => {
    try {
        const [selectResponse] = await Users.getSingelUser(req.params.id);
        res.status(200).json(selectResponse);
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
}
exports.updateSelectedUser = async (req, res, next) => {
    try {
        const updateResponse = await Users.updateUser(req.params.id, req.body.fName, req.body.lName, req.body.age);
        res.status(200).json(updateResponse);
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
}
exports.deleteSelectedUser = async (req, res, next) => {
    try {
        const deleteResponse = await Users.deleteUser(req.params.id);
        res.status(200).json(deleteResponse);
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
}