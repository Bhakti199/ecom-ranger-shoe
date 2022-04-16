import React from "react";
import { useFilter } from "../../Context/index";
import "./Card.css";
import { AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai";
import { BsHeart, BsFillHeartFill } from "react-icons/bs";
import toast from "react-hot-toast";
export const ProductCardForCart = () => {
  const { state, dispatch } = useFilter();
  const { cartList, wishList } = state;
  return (
    <>
      {cartList &&
        cartList.map((item) => (
          <div className="horizontal-card" key={item.cartItem.id}>
            <div className="horizontal-cart-card-img">
              <img
                src={item.cartItem.productImg}
                alt="product"
                className="responsive-image-cart"
              />
            </div>
            <div className="horizontal-card-sectionTwo flex-col">
              <div className="horizontal-card-content">
                <h4 className="vertical-card-content-two margin-top-bottom-zero">
                  {item.cartItem.productDetail} by {item.cartItem.productBrand}
                </h4>
                <div className="cart-wishlist-icon">
                  <span
                    onClick={() => {
                      dispatch({
                        type: "ADD_TO_WISHLIST",
                        payload: item.cartItem,
                      });
                      dispatch({ type: "REMOVE_FROM_CART", payload: item });
                      toast("added to wishlist", { icon: "✔️" });
                    }}
                  >
                    {wishList.some((product) => product.id === item.id) ? (
                      <BsFillHeartFill size={21} className="wishList-icon" />
                    ) : (
                      <BsHeart size={21} />
                    )}
                  </span>
                </div>
                <div className="vertical-card-content-three flex-start-row">
                  <p className="margin-top-bottom-zero current-price">
                    Rs.
                    {item.cartItem.originalPrice}
                    <span className="discount-text">
                      ({item.cartItem.discount}%)
                    </span>
                  </p>
                </div>
                <div className="quantity-section flex">
                  <span>quantity:</span>
                  <button
                    className="button"
                    onClick={() =>
                      dispatch({ type: "DECREMENT_CART_ITEM", payload: item })
                    }
                  >
                    <AiFillMinusCircle className="icon-size" />
                  </button>
                  <span className="quantity">{item.count}</span>
                  <button
                    className="button"
                    onClick={() =>
                      dispatch({ type: "INCREMENT_CART_ITEM", payload: item })
                    }
                  >
                    <AiFillPlusCircle className="icon-size" />
                  </button>
                </div>
              </div>
              <div className="horizontal-card-btn flex-col-center">
                <button
                  className="primary-btn-md-two  button-cart"
                  onClick={() => {
                    dispatch({ type: "REMOVE_FROM_CART", payload: item }),
                      toast("removed from cart", { icon: "❌" });
                  }}
                >
                  Remove from cart
                </button>
              </div>
            </div>
          </div>
        ))}
    </>
  );
};
