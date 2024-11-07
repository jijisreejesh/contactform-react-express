const express=require('express');
const cors=require('cors');
const mongoose=require('mongoose');
const app=express();
let port=3010;
mongoose.connect('mongodb://localhost:27017/ContactForm')
.then((res)=>console.log('Database connected successfully')
)
.catch((err)=>console.log('Database connection error ')
)
app.use(express.json())
app.use(cors())
const userModel=require('./contactSchema')
app.post('/',async(req,res)=>{
    try{ 
        let {name,age,email}=req.body;
    const details=await userModel.create({name,age,email})
        res.json({message : "Successfully inserted"})
    }
    catch(err){
        console.log('Error : ',err);   
    }
})
app.get('/',async(req,res)=>{
    try{ 
    const details=await userModel.find()
        res.json(details)
    }
    catch(err){
        console.log('Error : ',err);   
    }
})

app.listen(port,()=>{
    console.log('Server connected successfully');
    
})