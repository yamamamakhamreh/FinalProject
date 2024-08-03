import { Request,response } from "express";
import { Category} from "../db/entities/Category.js";
import { AppError } from "../errors/AppErrors.js";

const createCategory = async (payload:Category)=>{
    const category  = await Category.findOne({
        where:{ 
          name:payload.name
              
        }
    })
  
    if(category){
        throw new AppError("Category already exits", 409, true)
    }
  
    const newCategory  = Category.create(payload)
  return newCategory.save()
  }


  const getAllCategory = async () => {
return Category.find()

  };
  

  export{createCategory,getAllCategory}