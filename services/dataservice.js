const { request } = require('express');
const db = require('./db')

const login = (username,pswd)=>{
    return db.Log.findOne({
      username,
      password:pswd
    }).then((result)=>{
      if(result){
       console.log('login successfull');
       return{
          status:true,
          message:'login successfull',
          statusCode:200
       }
      }
      else{
          console.log('Invalid Username / Password');
          return{
              status:false,
              message:'Invalid Username / Password',
              statusCode:404
           }
      }
  })
  
   }

   //register
 const register = (username,pswd)=>{
    console.log('inside register function');
    return db.Log.findOne({
      username
      
    }).then((result)=>{
      if(result){
       console.log('alredy Registered');
       return{
          status:false,
          message:'Account already exist... please Log In',
          statusCode:404
       }
      }
      else{
          console.log('register successfull');
         let newAccount = new db.Log({
          username,
          pswd,
          
         })
         newAccount.save()
         return{
          status:true,
          message:'register successfull',
          statusCode:200
       }
      }
  })
  
   }
   const getAllProducts = ()=>{
    return db.Product.find()
    .then((data)=>{
      if(data){
          return{
              statusCode:200,
              result:data
          }
      }
      else{
          return{
              statusCode:404,
              message:'failed to fetch the data from data'
          }
         
      }
    });
  } 

  
//review 
const review = (name,email,message)=>{
  return db.Review.find({
    name,
    email,
    message
  }).then((result)=>{
    if(result){
     console.log('message send successfull');
     let newReviews = new db.Review({
      name,
      email,
      message
     })
     newReviews.save()
     return{
        status:true,
        message:'message send successfull',
        statusCode:200
     }
    }
    else{
        console.log('Invalid');
        return{
            status:false,
            message:'Invalid ',
            statusCode:404
         }
    }
})

 }


 const getAllreviews = ()=>{
  return db.Review.find()
  .then((data)=>{
    if(data){
        return{
            statusCode:200,
            result:data
        }
    }
    else{
        return{
            statusCode:404,
            message:'failed to fetch the data from data'
        }
       
    }
  });
} 


const addToWishlist = (id,product,price,description,image)=>{
  return db.Wishlist.findOne({
    id
  }).then((result)=>{
    if(result){
      return {
        statusCode : 404,
        message : 'product already in wishlist'
      };

    } 
    else{
      const newProduct = new db.Wishlist({
        id,
        product,
        price,
        description,
        image,
       
      });
      newProduct.save()
      return {
        statusCode:200,
        message:'product successfully added to your wishlist'
      }
    }
  });
};

const getWishlist = ()=>{
  return db.Wishlist.find()
  .then((data)=>{
    if(data){
        return{
            statusCode:200,
            result : data
        }
    }
    else{
        return{
            statusCode:404,
            message:'your wishlist is empty'
        }
       
    }
  });

}
const deletefrmwishlist = (id)=>{
  return db.Wishlist.deleteOne({
    id
  })
  .then(
    (data)=>{
      if(data){
        

 return db.Wishlist.find()
  .then((data)=>{
    if(data){
        return{
            statusCode:200,
            Wishlist : data,
            message:'product is removed from wishlist'
        };
    }
    else{
        return{
            statusCode:404,
            message:'your wishlist is empty'
        }
       
    }
  });


      }
      else{
        return{
          statusCode:404,
          message:'product not available'
        };
      }
    }
  )

}






   module.exports={
    login,
    register,
    getAllProducts,
    review,
    getAllreviews,
    addToWishlist,
    getWishlist,
    deletefrmwishlist
    

   }