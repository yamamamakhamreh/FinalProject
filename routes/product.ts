import { Router, Request, Response, NextFunction } from "express";
import {Product} from "../db/entities/Product.js"
import {createProduct,getAllProducts,getProduct}from "../controllers/product.js"



const router =Router()

router.post("/", async (req:Request, res:Response, next:NextFunction)=>{

    const payload:Product = req.body;
  
    if(!payload.name  ){
        res.json({
            messege:"Some feilds are missing",
            success: false
        })
        return;
    }
    try {
        const category = await createProduct(payload)
  
        res.json({
            messege:"Product created successfully",
            success: true
        })
    } catch (error) {
        console.log("Error" + error);
        next(error)
    }
  })


  router.get("/:id", async(req:Request, res:Response, next:NextFunction)=>{
    try {
      const id = Number(req.params.id);
      const product = await getProduct(id);
  
      res.json({
        message: "Produc retrieved successfully",
        success: true,
        product,
      });
    } catch (error) {
      console.log("Error: " + error);
      next(error);
    }
  });
  

  
router.get("/", async (req:Request, res:Response, next:NextFunction)=>{
    try {
        const Product = await getAllProducts()
  
        res.json({
            messege:"Product retrieved successfully",
            success: true,
            Product,
        })
    } catch (error) {
        console.log("Error" + error);
        next(error)
    }
  })

  export default router;

  