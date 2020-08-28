const jwt = require('jsonwebtoken');
const express = require('express')
const User = require('../models/User')
const jwtExpritySeconds = 300000;
const router = express.Router()
// login router
router.post('/login', async (req, res) => {

    const { userName, password } = req.body
    const user = await User.findOne({ userName: userName })
    const validPass = await user.comparePassword(password)
    if (validPass) {
        const token = jwt.sign({ userName }, process.env.TOKEN_SECRET, {
            algorithm: 'HS256',
            expiresIn: jwtExpritySeconds
        })
        console.log(token)
        // console.log(validPass)
        // res.cookie('token', token, { maxAge: jwtExpritySeconds * 10 })
        // res.send('Logged in!')
        res.header('auth-token', token).send(token)
    }
    res.end()
})
// refresh token
router.get('/refresh', (req, res) => {
    const token = req.cookies.token
    if (!token) {
        return res.status(401).end()
    }
    var payload
    try {
        payload = jwt.verify(token, jwtKey)
    } catch (e) {
        if (e instanceof jwt.JsonWebTokenError) {
            return res.status(401).end()
        }
        return res.status(400).end()
    }
    // 30 seconds of expiry. Otherwise, return a bad request status
    const nowUnixSeconds = Math.round(Number(new Date()) / 1000)
    if (payload.exp - nowUnixSeconds > 30) {
        return res.status(400).end()
    }
    // Now, create a new token for the current user, with a renewed expiration time
    const newToken = jwt.sign({ username: payload.username }, jwtKey, {
        algorithm: "HS256",
        expiresIn: jwtExpirySeconds,
    })

    // Set the new token as the users `token` cookie
    res.cookie("token", newToken, { maxAge: jwtExpirySeconds * 1000 })
    res.end()
})
module.exports = router;