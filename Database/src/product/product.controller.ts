import express, { Request, Response } from "express";
<<<<<<< HEAD
const { GetAllData, GetById } = require("./product.service");
=======
const { GetAllData, GetById, insertProduct } = require("./product.service");
>>>>>>> server
const router = express.Router();

router.get("/", async (req: Request, res: Response) => {
  const products = await GetAllData();
  res.send(products);
});

router.get("/:id", async (req: Request, res: Response) => {
  const product = await GetById(req.params.id);
  res.send(product);
});
<<<<<<< HEAD

=======
router.post("/", async (req: Request, res: Response) => {
  try {
    const newdata = req.body;

    const product = await insertProduct(req.body);
    res.send(product);
  } catch (error: any) {
    throw new Error(error.message);
  }
});
>>>>>>> server
module.exports = router;
