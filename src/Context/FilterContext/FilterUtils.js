const composeFunction = (state, functionList, data) =>
  functionList.reduce((accumulator, currentFunction) => {
    return currentFunction(accumulator, state);
  }, data);

const productListByRange = (productList, state) =>
  state.sortByRange === 0
    ? productList
    : [...productList].filter((product) => product.price <= state.sortByRange);

const productListByPrice = (productList, state) => {
  if (state.sortByPrice === "lowToHigh")
    return [...productList].sort((first, second) => first.price - second.price);
  else if (state.sortByPrice === "highToLow")
    return [...productList].sort((first, second) => second.price - first.price);
  else return productList;
};

const productListExcludingOutOfStock = (productList, state) => {
  if (state.includeOutOfStock === "include") return productList;
  else if (state.includeOutOfStock === "exclude")
    return productList.filter((item) => item.inStock === true);
  else return productList;
};

const productListFastDelivery = (productList, state) => {
  if (state.includeFastDelivery === "include")
    return productList.filter((item) => item.fastDelivery === true);
  else if (state.includeFastDelivery === "exclude") return productList;
  else return productList;
};

const productListByRatings = (productList, state) => {
  if (state.sortByRatings === "fourPlus")
    return productList.filter((item) => item.ratings >= 4);
  else if (state.sortByRatings === "threeToFour")
    return productList.filter((item) => item.ratings >= 3 && item.ratings <= 4);
  else if (state.sortByRatings === "threeBelow")
    return productList.filter((item) => item.ratings <= 3);
  else return productList;
};

const productListByBrand = (productList, state) => {
  const brandList = state.sortByBrand;
  return brandList.length === 0
    ? productList
    : [...productList].filter((product) =>
        brandList.some((brandName) => brandName === product.productBrand)
      );
};

const functionList = [
  productListByRange,
  productListByPrice,
  productListExcludingOutOfStock,
  productListFastDelivery,
  productListByBrand,
  productListByRatings,
];
export { functionList, composeFunction };
