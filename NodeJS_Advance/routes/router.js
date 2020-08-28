



// // middleware
// app.use(bodyPaser.json());
// app.use(cookiPaser());
// app.use((req, res, next) => {
//     const token = req.cookies.token
//     if (!token) {
//         res.status(401).end()
//     }
//     var payload
//     try {
//         // parse token string to payload
//         payload = jwt.verify(token, jwtKey)
//     } catch (e) {
//         if (e instanceof jwt.JsonWebTokenError) {
//             // if the error is because of JWT is unauthorized return 401 code
//             return res.status(401).end()
//         }
//         else
//             return res.status(400).end()
//     }
//     console.log(payload)
//     next()
// })
// // login router
// app.post('/login', (req, res) => {
//     const { username, password } = req.body
//     if (username == 'admin' && password == '12345678') {
//         const token = jwt.sign({ username }, jwtKey, {
//             algorithm: 'HS256',
//             expiresIn: jwtExpritySeconds
//         })
//         res.cookie('token', token, { maxAge: jwtExpritySeconds * 10 });
//     }
//     res.end()
// })
// // refresh token
// app.get('/refresh', (req, res) => {
//     const token = req.cookies.token
//     if (!token) {
//         return res.status(401).end()
//     }
//     var payload
//     try {
//         payload = jwt.verify(token, jwtKey)
//     } catch (e) {
//         if (e instanceof jwt.JsonWebTokenError) {
//             return res.status(401).end()
//         }
//         return res.status(400).end()
//     }
//     // 30 seconds of expiry. Otherwise, return a bad request status
//     const nowUnixSeconds = Math.round(Number(new Date()) / 1000)
//     if (payload.exp - nowUnixSeconds > 30) {
//         return res.status(400).end()
//     }
//     // Now, create a new token for the current user, with a renewed expiration time
//     const newToken = jwt.sign({ username: payload.username }, jwtKey, {
//         algorithm: "HS256",
//         expiresIn: jwtExpirySeconds,
//     })

//     // Set the new token as the users `token` cookie
//     res.cookie("token", newToken, { maxAge: jwtExpirySeconds * 1000 })
//     res.end()
// })

// app.listen(3000)