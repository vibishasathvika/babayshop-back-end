const express = require('express')

const dataService = require('./services/dataservice')

 const cors = require('cors')

const app = express()

app.use(express.json())

app.use(cors({
    origin:['http://localhost:4200']
}))


 
app.listen(3000,()=>{
    console.log('server started at 3000');
})


//login

app.post('/login',(req,res)=>{
    console.log('inside login function');
    console.log(req.body);
    dataService.login(req.body.username,req.body.pswd)
    .then((result)=>{
        res.status(result.statusCode).json(result)
    })
  

  
})

//register
app.post('/register',(req,res)=>{
    console.log('inside register function');
    console.log(req.body);
    dataService.register(req.body.username,req.body.pswd)
    .then((result)=>{
        res.status(result.statusCode).json(result)
    })
  

  
})




//getAllProcuts api

app.get('/all-products',(req,res)=>{
    console.log('inside getallproducts function');
    dataService.getAllProducts()
    .then((result)=>{
        res.status(result.statusCode).json(result)
    })
    
})

app.post('/review',(req,res)=>{
    console.log('inside reviewdata function');
    console.log(req.body);
    dataService.review(req.body.name,req.body.email,req.body.message)
    .then((result)=>{
        res.status(result.statusCode).json(result)
    })
  

  
})

app.get('/all-reviews',(req,res)=>{
    console.log('inside getallreview function');
    dataService.getAllreviews()
    .then((result)=>{
        res.status(result.statusCode).json(result)
    })
    
})


app.post('/add-to-wishlist',(req,res)=>{
    console.log('inside add-to-wishlist function');
    console.log(req.body);
    dataService.addToWishlist(req.body.id,req.body.product,req.body.price,req.body.description,req.body.image)
    .then((result)=>{
        res.status(result.statusCode).json(result)
    })
})

app.get('/get-wishlist',(req,res)=>{
    console.log('inside get-wishlist function');
   dataService.getWishlist()
    .then((result)=>{
        res.status(result.statusCode).json(result)
    })
})
app.delete('/delete-item-wishlist/:id',(req,res)=>{
    console.log('inside delete-item-wishlist function');
    dataService.deletefrmwishlist(req.params.id)
     .then((result)=>{
         res.status(result.statusCode).json(result)
     }) 
})