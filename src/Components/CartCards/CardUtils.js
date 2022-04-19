export const calculatePrice = (cartList) => {
  let priceArray = cartList.map((product) =>
    product.count === 1
      ? product.originalPrice
      : product.originalPrice * product.qty
  );
  const sum = (num1, num2) => num1 + num2;
  let sumPrice = priceArray.reduce(sum, 0);
  return sumPrice;
};

export const discountPrice = (cartList) => {
  let price = calculatePrice(cartList);
  let discountObj = cartList.reduce(
    (acc, curr) => ({
      discount:
        curr.count === 1
          ? acc.discount + curr.discount
          : acc.discount + curr.discount * curr.qty,
      numberOFItems: acc.numberOFItems + curr.qty,
    }),
    { discount: 0, numberOFItems: 0 }
  );
  let totalDiscount = discountObj.discount / discountObj.numberOFItems;
  let discountedPrice = (price * totalDiscount) / 100;
  let totalBill = price - discountedPrice;
  return { totalBill, discountedPrice };
};
