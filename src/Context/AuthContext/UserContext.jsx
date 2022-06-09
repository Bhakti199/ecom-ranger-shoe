import { createContext, useContext, useState } from "react";
import {
  addItemToCartCall,
  removeItemFromCartCall,
  updateCartItemCall,
  addItemToWishlistCall,
  removeItemFromWishlistCall,
  addAddressCall,
  removeAddressCall,
  addOrdersCall,
  updateAddressCall,
  clearCartCall,
} from "../../ApiCalls";
import { useProductList } from "../../Context";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { BsCheckCircleFill, BsXCircleFill } from "react-icons/bs";
const UserContext = createContext();

const UserProvider = ({ children }) => {
  const { setShowLoader } = useProductList();
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [addressForOrder, setAddressForOrder] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [proceedOrder, setProceedOrder] = useState(false);
  const [finalPrice, setFinalPrice] = useState("");
  const [selectAddress, setSelectAddress] = useState({
    isAddressSelected: false,
  });

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

  const clearCart = async () => {
    const { cart, status } = await clearCartCall();
    if (status === 200 || status === 201)
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

  const addAddress = async (address) => {
    setShowLoader(true);
    const { addresses, status } = await addAddressCall(address);
    if (status === 200 || status === 201) {
      setUser((prevUser) => ({ ...prevUser, addresses }));
      setShowLoader(false);

      toast("Address added successfully", { icon: <BsCheckCircleFill /> });
    } else {
      toast("Please try after some time");
    }
  };

  const removeAddress = async (addressId) => {
    setShowLoader(true);
    const { addresses, status } = await removeAddressCall(addressId);
    if (status === 200 || status === 201) {
      setUser((prevUser) => ({ ...prevUser, addresses }));
      setShowLoader(false);
      toast("Address deleted successfully", { icon: <BsCheckCircleFill /> });
    } else {
      toast("Please try after some time");
    }
  };

  const updateAddress = async (address) => {
    setShowLoader(true);
    const { addresses, status } = await updateAddressCall(address);
    console.log({ addresses, status });
    if (status === 200 || status === 201) {
      setUser((prevUser) => ({ ...prevUser, addresses }));
      setShowLoader(false);
      toast("Address updated successfully", { icon: <BsCheckCircleFill /> });
    } else {
      toast("Please try after some time");
    }
  };
  const addOrders = async (order) => {
    setShowLoader(true);
    const { orders, status } = await addOrdersCall(order);
    if (status === 200 || status === 201) {
      setUser((prevUser) => ({ ...prevUser, orders }));
      setShowLoader(false);
      toast("Order placed successfully", { icon: <BsCheckCircleFill /> });
    } else {
      toast("Please try after some time");
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
        addAddress,
        removeAddress,
        addOrders,
        addressForOrder,
        setAddressForOrder,
        searchInput,
        setSearchInput,
        updateAddress,
        proceedOrder,
        setProceedOrder,
        selectAddress,
        setSelectAddress,
        finalPrice,
        setFinalPrice,
        clearCart,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

const useUser = () => useContext(UserContext);

export { useUser, UserProvider };
