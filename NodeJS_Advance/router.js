const express = require('express');
const bodyPaser = require('body-parser');
const cookiPaser = require('cookie-parser');
const jwt = require('jsonwebtoken');
const jwtKey = "my_secret_key";
const jwtExpritySeconds = 300000;
//id: Number, userName: String, password: String, preName, firstName: String, lastName,  role: String, createdAt: Date, updateAt: Date
var users = [{ id: 1, userName: 'adddsaa', password: 'String', firstName: 'Thanh', lastName: 'Dang', role: 'CEO', createdAt: '"2015-03-25"', updateAt: '"2015-03-25"' },
{ id: 2, userName: 'adeeed', password: 'String', firstName: 'Thanh1', lastName: 'Dang', role: 'CEO', createdAt: '"2015-03-25"', updateAt: '"2015-03-25"' },
{ id: 3, userName: 'agggdddddaa', password: 'String', firstName: 'Thanh2', lastName: 'Dang', role: 'CEO', createdAt: '"2015-03-25"', updateAt: '"2015-03-25"' },
{ id: 4, userName: 'addsaa', password: 'String', firstName: 'Thanh3', lastName: 'Dang', role: 'CEO', createdAt: '"2015-03-25"', updateAt: '"2015-03-25"' },
{ id: 5, userName: 'adddddaa', password: 'String', firstName: 'Thanh4', lastName: 'Dang', role: 'CEO', createdAt: '"2015-03-25"', updateAt: '"2015-03-25"' },
{ id: 6, userName: 'adaa', password: 'String', firstName: 'Thanh5', lastName: 'Dang', role: 'CEO', createdAt: '"2015-03-25"', updateAt: '"2015-03-25"' },
{ id: 7, userName: 'advnaa', password: 'String', firstName: 'Thanh6', lastName: 'Dang', role: 'CEO', createdAt: '"2015-03-25"', updateAt: '"2015-03-25"' }
]
const app = express();
// middleware
app.use(bodyPaser.json());
app.use(cookiPaser());
app.use((req, res, next) => {
    const token = req.cookies.token
    if (!token) {
        res.status(401).end()
    }
    var payload
    try {
        // parse token string to payload
        payload = jwt.verify(token, jwtKey)
    } catch (e) {
        if (e instanceof jwt.JsonWebTokenError) {
            // if the error is because of JWT is unauthorized return 401 code
            return res.status(401).end()
        }
        else
            return res.status(400).end()
    }
    console.log(payload)
    next()
})
// login router
app.post('/login', (req, res) => {
    const { username, password } = req.body
    if (username == 'admin' && password == '12345678') {
        const token = jwt.sign({ username }, jwtKey, {
            algorithm: 'HS256',
            expiresIn: jwtExpritySeconds
        })
        res.cookie('token', token, { maxAge: jwtExpritySeconds * 10 });
    }
    res.end()
})
// refresh token
app.get('/refresh', (req, res) => {
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
// getUsers, getUserDetail, createUser, updateUser, deleteUser router
app.get('/getUsers', (req, res) => {
    let usersInfor = []
    users.forEach(user => {
        usersInfor.push({
            fullName: user.firstName + user.lastName,
            role: user.role
        })
    })
    console.log(usersInfor);
    res.end(JSON.stringify(usersInfor));

})
app.get('/getUserDetail/:id', (req, res) => {
    let user = {
        fullName: users[req.params.id].firstName + " " + users[req.params.id].lastName,
        role: users[req.params.id].role
    }
    res.end(JSON.stringify(user))
})
app.post('/createUser', (req, res) => {
    res.send({ "message": "createUser" })
})
app.put('/updateUser/:id', (req, res) => {
    let updated_user = {
        id: req.params.id,
        userName: req.body.userName,
        password: req.body.password,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        role: req.body.role,
        createdAt: req.body.createdAt,
        updateAt: req.body.updateAt
    }
    users[req.params.id] = updated_user
    console.log(users)
    res.send({ "message": "updateUser" })
})
app.delete('/deleteUser/:id', (req, res) => {
    users = users.filter(user => user.id != req.params.id)
    console.log('Successful delete user: ' + req.params.id)
    console.log(users)
    res.send({ "message": "deleteUser" })
})
//
app.listen(3000)