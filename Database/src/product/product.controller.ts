
import express, { Request, Response } from "express";
const { GetAllData, GetById, createproduct, editProductById, deleteProductById } = require("./product.service");
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

    const product = await createproduct(newdata);
    res.send(product);
  } catch (error: any) {
    throw new Error(error.message);
  }
});
router.put("/:id", async (req, res) => {
  const productId = req.params.id;
  const productData = req.body;

  if (
    !(
      productData.image &&
      productData.description &&
      productData.name &&
      productData.price
    )
  ) {
    return res.status(400).send("Some fields are missing");
  }

  const product = await editProductById(productId, productData);

  res.send({
    data: product,
    message: "edit product success",
  });
});
router.delete("/:id", async (req, res) => {
  try {
    const productId = req.params.id; // string

    await deleteProductById(productId);

    res.send("product deleted");
  } catch (error: Error | any) {
    res.status(400).send(error.message);
  }
});
router.patch("/:id", async (req, res) => {
  try {
    const productId = req.params.id;
    const productData = req.body;

    const product = await editProductById(parseInt(productId), productData);

    res.send({
      data: product,
      message: "edit product success",
    });
  } catch (err: any) {
    res.status(400).send(err.message);
  }
});
module.exports = router;
