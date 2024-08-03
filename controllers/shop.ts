import { Request,response } from "express";
import { Shop } from "../db/entities/Shop.js";
import { AppError } from "../errors/AppErrors.js";

const createShop = async (payload:Shop)=>{
    const shop  = await Shop.findOne({
        where:{ 
          shopName:payload.shopName,
          email:payload.email
        
        }
    })
  
    if(shop){
        throw new AppError("shop already exits", 409, true)
    }
  
    const newShop  = Shop.create(payload)
  return newShop.save()
  }

  const getShop  = async (id:number) => {
    const shop  = await Shop .findOne({where:{
        id:id
        }
    });

    if(shop){
        throw new AppError("product not found", 404, true)
    }
    
    return shop;

  };
  const getAllShop = async () => {
    return Shop.find()
     };

  export{createShop,getShop,getAllShop}
  