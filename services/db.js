const mongoose = require('mongoose')
 


 mongoose.connect('mongodb://localhost:27017/babyonlinecart',()=>{
    console.log('mongoDB conneted successfully');
 })

 const Log = mongoose.model('logs',{
    username:String,
    pswd:String,
    
 }) 

 const Product = mongoose.model('products',{
  id:Number,
  product:String,
  image:String,
  description:String


 })

 const Review = mongoose.model('reviews',{
   name:String,
   email:String,
   message:String


 })
 const Wishlist = mongoose.model('wishlists',{
   id:Number,
   product:String,
   image:String,
   description:String,
   price:Number
 
 
  })
 





 module.exports = {
    
    Log,
    Product,
    Review,
    Wishlist
 }
