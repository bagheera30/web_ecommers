export const getApiResponse = async (resource, query) => {
  const response = await fetch(
    `${import.meta.env.PUBLIC_API_PRODUCT}/${resource}?${query}`
  );
  const product = await response.json();
  return product;
};
