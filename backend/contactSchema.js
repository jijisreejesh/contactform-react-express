const mongoose=require('mongoose')
const userSchema=mongoose.Schema({
    name:{type:String},
    age:{type:String},
    email:{type:String}
})
const userModel=mongoose.model('user',userSchema);
module.exports=userModel