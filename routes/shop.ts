import { Router, Request, Response, NextFunction } from "express";
import {createShop,getShop,getAllShop} from "../controllers/shop.js"
import {Shop} from "../db/entities/Shop.js"

const router =Router()

router.post("/", async (req:Request, res:Response, next:NextFunction)=>{

    const payload:Shop = req.body;
  
    if(!payload.shopName || !payload.email ){
        res.json({
            messege:"Some feilds are missing",
            success: false
        })
        return;
    }
    try {
        const shop = await createShop(payload)
  
        res.json({
            messege:"Shop created successfully",
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
      const Shop = await getShop(id);
  
      res.json({
        message: "Shop retrieved successfully",
        success: true,
        Shop,
      });
    } catch (error) {
      console.log("Error: " + error);
      next(error);
    }
  });

  router.get("/", async (req:Request, res:Response, next:NextFunction)=>{
    try {
        const shop = await getAllShop()
  
        res.json({
            messege:"Product retrieved successfully",
            success: true,
            shop,
        })
    } catch (error) {
        console.log("Error" + error);
        next(error)
    }
  })

  export default router;