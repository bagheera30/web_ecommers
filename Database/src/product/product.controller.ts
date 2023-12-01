import express, { Request, Response } from "express";
const { GetAllData, GetById } = require("./product.service");
const router = express.Router();

router.get("/", async (req: Request, res: Response) => {
  const products = await GetAllData();
  res.send(products);
});

router.get("/:id", async (req: Request, res: Response) => {
  const product = await GetById(req.params.id);
  res.send(product);
});

module.exports = router;
