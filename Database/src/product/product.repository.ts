export { }
const db = require("../libs/db");

const prisma = db.getInstance();

const findProducts = async () => {
  const products = await prisma.Products.findMany();

  return products;
};
const findProductById = async (id: string) => {
  const product = await prisma.Products.findUnique({
    where: {
      id,
    },
  });

  return product;
};

const insertProduct = async (productData: any) => {
  const product = await prisma.product.create({
    data: {
      name: productData.name,
      description: productData.description,
      image: productData.image,
      price: productData.price,
    },
  });

  return product;
};

const deleteProduct = async (id: string) => {
  await prisma.product.delete({
    where: {
      id,
    },
  });
  // DELETE FROM products WHERE id = {productId}
};

const editProduct = async (id: string, productData: any) => {
  const product = await prisma.product.update({
    where: {
      id,
    },
    data: {
      description: productData.description,
      image: productData.image,
      name: productData.name,
      price: productData.price,
    },
  });

  return product;
};

module.exports = {
  findProducts,
  findProductById,
  insertProduct,
  deleteProduct,
  editProduct,
};