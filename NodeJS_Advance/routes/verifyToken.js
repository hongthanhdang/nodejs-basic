const jwt=require('jsonwebtoken')
module.exports = (req, res, next) => {
    const token = req.header('aut-token')
    console.log(token)
    if (!token) {
        
        res.status(401).end()
    }
    var payload
    try {
        // parse token string to payload
        payload = jwt.verify(token, process.env.TOKEN_SECRET)
    } catch (e) {
        if (e instanceof jwt.JsonWebTokenError) {
            // if the error is because of JWT is unauthorized return 401 code
            console.log(e)
            return res.status(401).end()
        }
        else
            return res.status(400).end()
    }
    console.log(payload)
    next()
}