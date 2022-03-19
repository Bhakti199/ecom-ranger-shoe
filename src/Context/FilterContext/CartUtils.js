export const addItemToCart = (itemToAdd, cartList) => {
  if (cartList.length === 0) return [{ cartItem: itemToAdd, count: 1 }];
  else {
    let checkProduct = cartList.find(
      (product) => product.cartItem._id === itemToAdd._id
    );
    if (checkProduct) {
      return cartList.map((product) =>
        product.cartItem._id === checkProduct.cartItem._id
          ? { ...product, count: checkProduct.count + 1 }
          : product
      );
    } else {
      return [...cartList, { cartItem: itemToAdd, count: 1 }];
    }
  }
};

export const removeItemFromCart = (itemToRemove, cartList) =>
  cartList.filter(
    (product) => product.cartItem._id !== itemToRemove.cartItem._id
  );

export const incrementCartItem = (itemToIncrement, cartList) =>
  cartList.map((product) =>
    product.cartItem._id === itemToIncrement.cartItem._id
      ? { ...itemToIncrement, count: itemToIncrement.count + 1 }
      : product
  );

export const decrementCartItem = (itemToDecrement, cartList) => {
  if (itemToDecrement.count === 1) {
    return removeItemFromCart(itemToDecrement, cartList);
  }
  return cartList.map((product) =>
    product.cartItem._id === itemToDecrement.cartItem._id
      ? { ...itemToDecrement, count: itemToDecrement.count - 1 }
      : product
  );
};
