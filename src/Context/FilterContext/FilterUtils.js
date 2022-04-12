const composeFunction = (state, functionList, data) =>
  functionList.reduce((accumulator, currentFunction) => {
    return currentFunction(accumulator, state);
  }, data);
const productListByCategory = (productList, state) =>
  state.categoryName === ""
    ? productList
    : [...productList].filter((product) =>
        product.categoryName.includes(state.category)
      );

const productListByRange = (productList, state) =>
  state.sortByRange === 0
    ? productList
    : [...productList].filter((product) => product.price <= state.sortByRange);

const productListByPrice = (productList, state) => {
  switch (state.sortByOrder) {
    case "lowToHigh":
      return [...productList].sort(
        (first, second) => first.price - second.price
      );
    case "highToLow":
      return [...productList].sort(
        (first, second) => second.price - first.price
      );
    default:
      return productList;
  }
};

const productListExcludingOutOfStock = (productList, state) => {
  switch (state.includeOutOfStock) {
    case "include":
      return productList;
    case "exclude":
      return productList.filter((item) => item.inStock === true);
    default:
      return productList;
  }
};

const productListFastDelivery = (productList, state) => {
  switch (state.includeFastDelivery) {
    case "include":
      return productList.filter((item) => item.fastDelivery === true);
    case "exclude":
      return productList;
    default:
      return productList;
  }
};

const productListByRatings = (productList, state) => {
  switch (state.sortByRatings) {
    case "fourPlus":
      return productList.filter((item) => item.ratings >= 4);
    case "threeToFour":
      return productList.filter(
        (item) => item.ratings >= 3 && item.ratings <= 4
      );
    case "threeBelow":
      return productList.filter((item) => item.ratings <= 3);
    default:
      return productList;
  }
};

const productListByColor = (productList, state) =>
  state.sortByColor === ""
    ? productList
    : productList.filter((item) => item.color === state.sortByColor);

const productListByBrand = (productList, state) => {
  const brandList = state.sortByBrand;
  return brandList.length === 0
    ? productList
    : [...productList].filter((product) =>
        brandList.some((brandName) => brandName === product.productBrand)
      );
};
const productListByAscendingOrder = (productList, state) => {
  switch (state.sortByOrder) {
    case "SORT_ASCENDING_ORDER":
      return [...productList].sort((first, second) =>
        second.productBrand > first.productBrand ? -1 : 1
      );
    case "SORT_DESCENDING_ORDER":
      return [...productList].sort((first, second) =>
        second.productBrand < first.productBrand ? -1 : 1
      );
    default:
      return productList;
  }
};

const functionList = [
  productListByCategory,
  productListByRange,
  productListByPrice,
  productListExcludingOutOfStock,
  productListFastDelivery,
  productListByBrand,
  productListByRatings,
  productListByAscendingOrder,
  productListByColor,
];
export { functionList, composeFunction };
