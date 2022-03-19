export const addToWishList = (itemToAdd, wishList) => {
  if (wishList.length === 0) return [itemToAdd];
  return wishList.some((item) => item._id === itemToAdd._id)
    ? wishList
    : [...wishList, itemToAdd];
};

export const removeFromWishList = (itemToRemove, wishList) =>
  wishList.filter((item) => item._id !== itemToRemove._id);
