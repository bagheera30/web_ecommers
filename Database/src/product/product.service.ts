import { constants } from "buffer";

const { findProducts, findProductById, insertProduct, editProduct, deleteProduct } = require("./product.repository");
const GetAllData = async () => {
  const data = await findProducts();
  return data;
};

const GetById = async (id: string) => {
  const data = await findProductById(id);
  return data;
};
const createproduct = async (productData: any) => {
  const product = await insertProduct(productData);
  return product;
}
const deleteProductById = async (id: string) => {
  await GetById(id)
  await deleteProduct(id);
}
const editProductById = async (id: string, productData: any) => {
  await GetById(id);

  const product = await editProduct(id, productData)

  return product;
};

module.exports = {
  GetAllData,
  GetById,
  createproduct,
  editProductById,
  deleteProductById,
};
