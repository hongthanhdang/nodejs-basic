const express = require('express')
const User = require('../models/User');
const router = express.Router();
const verifyToken=require('./verifyToken')
// getUsers, getUserDetail, createUser, updateUser, deleteUser router
// middleware for user
router.use(verifyToken)
// return list all users
router.get('/',async (req, res) => {
    try {
        const users = await User.find()
        res.json(users)
    } catch (error) {
        res.json({ message: error })
    }
})
// return a user information detail base on id
router.get('/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id)
        res.json(user)
    } catch (error) {
        res.json({ message: error })
    }
})
// add an user 
router.post('/', async (req, res) => {
    const user = new User({
        userName: req.body.userName,
        password: req.body.password,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        role: req.body.role,
        createdAt: req.body.createdAt,
        updateAt: req.body.updateAt
    })
    try {
        const savedUser = await user.save();
        res.json(savedUser)
    } catch (error) {
        res.json({ message: error })
    }
})
// update exiting user
router.put('/:id', async (req, res) => {
    // let updated_user = {
    //     id: req.params.id,
    //     userName: req.body.userName,
    //     password: req.body.password,
    //     firstName: req.body.firstName,
    //     lastName: req.body.lastName,
    //     role: req.body.role,
    //     createdAt: req.body.createdAt,
    //     updateAt: req.body.updateAt
    // }
    try {
        const updatedUser = await User.updateOne({
            _id: req.params.id
        },
            {
                $set: {
                    userName: req.body.userName,
                    password: req.body.password,
                    firstName: req.body.firstName,
                    lastName: req.body.lastName,
                    role: req.body.role,
                    createdAt: req.body.createdAt,
                    updateAt: req.body.updateAt
                }
            });
        res.json(updatedUser)
    } catch (error) {
        res.json({ message: error })
    }
})
// delete user
router.delete('/:id', async (req, res) => {
    try {
        console.log(req.body)
        const removedUser = await User.remove({ _id: req.params.id })
        res.json(removedUser)
    }
    catch (error) {
        res.json({ message: error })
    }
})
module.exports = router;