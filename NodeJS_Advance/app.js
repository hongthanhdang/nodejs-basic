/** Exersie 2 */
const express=require('express')
const app=express()
const bodyParser=require('body-parser')
const cockieParser=require('cookie-parser')
const jwt=require('jsonwebtoken')
const jwtKey="my_secret_key"
const jwtExpirySeconds=300

// middleware
app.use(bodyParser.json())
app.use(cockieParser());
// routers
app.post('/login',(req,res)=>{
    const {username,password}=req.body;
    console.log(req.body);
    if(username=='admin'&& password=='12345678'){
        const token=jwt.sign({username},jwtKey,{
            algorithm:"HS256",
            expiresIn:jwtExpirySeconds,
        })
        console.log(token);
        res.cookie("token",token,{maxAge:jwtExpirySeconds*10});
        res.end()
    }
    else{
        // console.log('aaa')
        res.status(401).end();
    }
    // res.send({"message":"loging"});
})
app.get('/users',(req,res)=>{
    res.send({"message":"users get"});
})
app.get('/user',(req,res)=>{
    res.send({"message":"user"});
})
app.post('/users/:id',(req,res)=>{
    res.send({"message":"users post"});
    console.log(req.params.id);
})
app.put('/users',(req,res)=>{
    res.send({"message":"users put"});
})
app.delete('/users/:id',(req,res)=>{
    res.send({"message":"users delete"});
    console.log(req.params.id);
})
app.listen(3004)