export const filterByPrice = (products, maxPrice) =>
  products?.filter(({ price }) => price < maxPrice)
