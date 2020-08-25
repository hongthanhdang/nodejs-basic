/** Exercise 1 */
const express=require('express')
const app=express();
// router
app.get('/',(req,res)=>{
    res.send("Hello world")
})
app.listen(3001)