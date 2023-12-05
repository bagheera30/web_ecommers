import express, { Request, Response } from "express";
const { GetAllData, GetById, insertProduct } = require("./product.service");
const router = express.Router();

router.get("/", async (req: Request, res: Response) => {
  const products = await GetAllData();
  res.send(products);
});

router.get("/:id", async (req: Request, res: Response) => {
  const product = await GetById(req.params.id);
  res.send(product);
});
router.post("/", async (req: Request, res: Response) => {
  try {
    const newdata = req.body;

    const product = await insertProduct(req.body);
    res.send(product);
  } catch (error: any) {
    throw new Error(error.message);
  }
});
module.exports = router;
