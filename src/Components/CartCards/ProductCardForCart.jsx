import React, { useState } from "react";
import { useFilter, useUser } from "../../Context/index";
import "./Card.css";
import { VscTrash } from "react-icons/vsc";
import { AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai";
import { BsHeart, BsFillHeartFill } from "react-icons/bs";
import toast from "react-hot-toast";
export const ProductCardForCart = () => {
  const { state, dispatch } = useFilter();
  // const { wishList } = state;
  const {
    user,
    removeItemFromCart,
    updateCartQuantity,
    addItemToWishlist,
    removeItemFromWishlist,
  } = useUser();
  const { cart, wishlist } = user;
  return (
    <>
      {cart &&
        cart.map((item) => (
          <div className="horizontal-card" key={item.id}>
            <div className="horizontal-cart-card-img">
              <img
                src={item.productImg}
                alt="product"
                className="responsive-image-cart"
              />
            </div>
            <div className="horizontal-card-sectionTwo flex-col">
              <div className="horizontal-card-content">
                <h4 className="vertical-card-content-two margin-top-bottom-zero">
                  {item.productDetail} by {item.productBrand}
                </h4>
                <div className="cart-wishlist-icon">
                  <span>
                    {wishlist.some((product) => product.id === item.id) ? (
                      <BsFillHeartFill
                        size={21}
                        className="wishList-icon"
                        onClick={() => {
                          removeItemFromWishlist(item._id);
                          toast("added to wishlist", { icon: "✔️" });
                        }}
                      />
                    ) : (
                      <BsHeart
                        size={21}
                        onClick={() => {
                          addItemToWishlist(item);
                          toast("added to wishlist", { icon: "✔️" });
                        }}
                      />
                    )}
                  </span>
                </div>
                <div className="vertical-card-content-three flex-start-row">
                  <p className="margin-top-bottom-zero current-price">
                    Rs.
                    {item.originalPrice}
                    <span className="discount-text">({item.discount}%)</span>
                  </p>
                </div>
                <div className="quantity-section flex">
                  <span>quantity:</span>
                  <button className="button">
                    {item.qty > 1 ? (
                      <AiFillMinusCircle
                        className="icon-size"
                        onClick={() => {
                          updateCartQuantity(item._id, "decrement");
                          toast("removed from cart", { icon: "❌" });
                        }}
                      />
                    ) : (
                      <VscTrash
                        size={22}
                        onClick={() => {
                          removeItemFromCart(item._id);
                          toast("removed from cart", { icon: "❌" });
                        }}
                      />
                    )}
                  </button>
                  <span className="quantity">{item.qty}</span>
                  <button
                    className="button"
                    onClick={() => {
                      updateCartQuantity(item._id, "increment");
                    }}
                  >
                    <AiFillPlusCircle className="icon-size" />
                  </button>
                </div>
              </div>
              <div className="horizontal-card-btn flex-col-center">
                <button
                  className="primary-btn-md-two  button-cart"
                  onClick={() => {
                    removeItemFromCart(item._id);
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
