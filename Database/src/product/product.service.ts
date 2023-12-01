const { findProducts } = require("./product.repository");
const GetAllData = async () => {
  const data = await findProducts();
  return data;
};

// const GetById = async (id: string) => {
//   const data = await FindProductbyid(id);
//   return data;
// };
module.exports = {
  GetAllData,
  // GetById,
};
