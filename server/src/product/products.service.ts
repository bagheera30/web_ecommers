const {
  findProducts,
  findProductById,
  insertProduct,
  deleteProduct,
  editProduct,
} = require("./product.repository");
const getallproducts = async () => {
  const product = await findProducts();
  return product;
};
const getbyid = async (id: string) => {
  const product = await findbyId(id);
  if (!product) {
    throw Error("Product not found");
  }
  return product;
};

module.exports = {
  getallproducts,
};
