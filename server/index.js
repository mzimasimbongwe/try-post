const express = require ('express')
const mongoose = require ('mongoose')
const cors = require ('cors')
const UserModel = require ('./models/users')

const app =express()
app.use(cors())
app.use(express.json());

mongoose.connect("mongodb+srv://mzimasimbongwe:layola@cluster0.2rulpxb.mongodb.net/mern?retryWrites=true&w=majority")

app.get("/getusers",(req, res)=>{
    UserModel.find({}).then(function(users){
      res.json(users)  
    }).catch(function(err){
        res.json(err)
    })

})

app.post("/createuser",(req, res)=>{
    const user = req.body;
    const newuser = new UserModel(user);
    newuser.save();
    res.json(use)
})
app.listen(3001, ()=>{
    console.log("server is running")
})