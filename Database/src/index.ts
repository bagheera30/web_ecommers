import express, { Request, Response } from "express";
const dotenv = require("dotenv");
const app = express();
dotenv.config();
app.use(express.json());
const port = process.env.PORT;
app.get("/", (req: Request, res: Response) => {
  res.send("Hello World");
});
const productController = require("./product/product.controller");
app.use("/products", productController);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
