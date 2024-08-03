import { Request,response } from "express";
import { Product } from "../db/entities/Product.js";
import { AppError } from "../errors/AppErrors.js";



const createProduct = async (payload:Product)=>{
  const product  = await Product.findOne({
      where:{ 
        name:payload.name,
        price:payload.price
      
      }
  })

  if(product){
      throw new AppError("product already exits", 409, true)
  }

  const newProduct  = Product.create(payload)
return newProduct.save()
}



const getAllProducts = async () => {
  return Product.find()
   };


   
  const getProduct = async (id:number) => {
    const product = await Product.findOne({where:{
        id:id
        }
    });

    if(product){
        throw new AppError("product not found", 404, true)
    }
    
    return product;

  };

export{createProduct,getAllProducts,getProduct}