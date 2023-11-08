import { Request, Response } from "express";
const expres = require("express");
const router = expres.Router();
const { getallproducts, getbyid } = require("./products.service");

router.get("/", async (req: Request, res: Response) => {
  const products = await getallproducts();

  res.send(products);
});

router.get("/:id", async (req: Request, res: Response) => {
  try {
    const productId = req.params.id;
    const product = await getbyid(productId);
    res.send(product);
  } catch (err) {
    const errorMessage = (err as Error).message;
    res.status(400).send(errorMessage);
  }
});
