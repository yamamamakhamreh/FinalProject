import { Router, Request, Response, NextFunction } from "express";
import {createCategory,getAllCategory} from "../controllers/category.js"
import {Category} from "../db/entities/Category.js"

const router =Router()

router.post("/", async (req:Request, res:Response, next:NextFunction)=>{

    const payload:Category = req.body;
  
    if(!payload.name  ){
        res.json({
            messege:"Some feilds are missing",
            success: false
        })
        return;
    }
    try {
        const category = await createCategory(payload)
  
        res.json({
            messege:"Category created successfully",
            success: true
        })
    } catch (error) {
        console.log("Error" + error);
        next(error)
    }
  })



router.get("/", async (req:Request, res:Response, next:NextFunction)=>{
    try {
        const Category = await getAllCategory()
  
        res.json({
            messege:"Category retrieved successfully",
            success: true,
            Category,
        })
    } catch (error) {
        console.log("Error" + error);
        next(error)
    }
  })
  export default router;

  