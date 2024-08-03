import { Request, Response, Express } from "express";
import express from 'express'
import env from "dotenv"
import shopRoute  from "./routes/shop.js"; 
import CategoryRoute from "./routes/category.js";
import ProductRoute  from "./routes/product.js";
import dataSource from "./db/dbConfig.js";
import { customErrorHandler, DefaultErrorHandler } from "./middleware/errorHandler.js";

env.config

const app: Express = express();
const PORT: Number = 3000;
const Root: "/" = "/";





// Route.
app.get(Root, (req: Request, res: Response) => {
    res.send("hello world");
})


app.use(express.json())

app.use("/shops", shopRoute);
app.use("/Category", CategoryRoute);
app.use("/Product", ProductRoute);


dataSource.initialize().then(() => {
    console.log("connected to DB");
}).catch(err => {
    console.error('Failed to connect to DB: ' + err);
});

app.listen(PORT, () => {
    console.log(`server is running on host: http://localhost:${PORT}`);
});


export default dataSource;





