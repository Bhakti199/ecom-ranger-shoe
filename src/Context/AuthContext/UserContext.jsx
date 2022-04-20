import { createContext, useContext, useState } from "react";
import {
  addItemToCartCall,
  removeItemFromCartCall,
  updateCartItemCall,
  addItemToWishlistCall,
  removeItemFromWishlistCall,
} from "../../ApiCalls";
import { useNavigate } from "react-router-dom";
const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  const addItemToCart = async (product) => {
    let checkProduct =
      isUserLoggedIn && user.cart.some((item) => item._id === product._id);
    if (checkProduct) {
      return navigate("/cart-page");
    }
    const { cart, status } = await addItemToCartCall(product);
    setUser((prevUser) => ({ ...prevUser, cart }));
  };

  const removeItemFromCart = async (productId) => {
    const { cart, status } = await removeItemFromCartCall(productId);
    setUser((prevUser) => ({ ...prevUser, cart }));
  };

  const updateCartQuantity = async (productId, updateAction) => {
    const { cart, status } = await updateCartItemCall(productId, updateAction);
    setUser((prevUser) => ({ ...prevUser, cart }));
  };

  const addItemToWishlist = async (product) => {
    const { wishlist, status } = await addItemToWishlistCall(product);
    setUser((prevUser) => ({ ...prevUser, wishlist }));
  };

  const removeItemFromWishlist = async (productId) => {
    const { wishlist, status } = await removeItemFromWishlistCall(productId);
    setUser((prevUser) => ({ ...prevUser, wishlist }));
  };

  return (
    <UserContext.Provider
      value={{
        isUserLoggedIn,
        setIsUserLoggedIn,
        user,
        setUser,
        addItemToCart,
        removeItemFromCart,
        updateCartQuantity,
        addItemToWishlist,
        removeItemFromWishlist,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

const useUser = () => useContext(UserContext);

export { useUser, UserProvider };
