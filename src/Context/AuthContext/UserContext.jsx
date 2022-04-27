import { createContext, useContext, useState } from "react";
import {
  addItemToCartCall,
  removeItemFromCartCall,
  updateCartItemCall,
  addItemToWishlistCall,
  removeItemFromWishlistCall,
} from "../../ApiCalls";
import { useProductList } from "../../Context";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { BsCheckCircleFill, BsXCircleFill } from "react-icons/bs";
const UserContext = createContext();

const UserProvider = ({ children }) => {
  const { setShowLoader } = useProductList();
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  const [user, setUser] = useState({});
  const navigate = useNavigate();

  const addItemToCart = async (product) => {
    let checkProduct =
      isUserLoggedIn && user.cart.some((item) => item._id === product._id);
    if (checkProduct) {
      return navigate("/cart-page");
    }
    if (isUserLoggedIn) {
      setShowLoader(true);
      const { cart, status } = await addItemToCartCall(product);
      console.log("bhakti23wr44r");
      setUser((prevUser) => ({ ...prevUser, cart }));
      toast("Added item to cart", { icon: <BsCheckCircleFill /> });
      setShowLoader(false);
    } else {
      navigate("/login");
    }
  };

  const removeItemFromCart = async (productId) => {
    const { cart, status } = await removeItemFromCartCall(productId);
    if (status === 200 || status === 201) {
      setShowLoader(true);
      setUser((prevUser) => ({ ...prevUser, cart }));
      setShowLoader(false);
      toast("Removed item from cart", { icon: <BsXCircleFill /> });
    } else {
      toast("Please try after some.");
    }
  };

  const updateCartQuantity = async (productId, updateAction) => {
    const { cart, status } = await updateCartItemCall(productId, updateAction);
    setUser((prevUser) => ({ ...prevUser, cart }));
  };

  const addItemToWishlist = async (product) => {
    if (isUserLoggedIn) {
      setShowLoader(true);
      const { wishlist, status } = await addItemToWishlistCall(product);
      if (status === 200 || status === 201) {
        setUser((prevUser) => ({ ...prevUser, wishlist }));
        setShowLoader(false);
        toast("Added item to wishlist. ", { icon: <BsCheckCircleFill /> });
      } else {
        toast("please try after some time.");
      }
    } else {
      navigate("/login");
    }
  };

  const removeItemFromWishlist = async (productId) => {
    setShowLoader(true);
    const { wishlist, status } = await removeItemFromWishlistCall(productId);
    if (status === 200 || status === 201) {
      setUser((prevUser) => ({ ...prevUser, wishlist }));
      setShowLoader(false);
      toast("Removed from wishlist.", { icon: <BsXCircleFill /> });
    } else {
      toast("please try after some time.");
    }
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
