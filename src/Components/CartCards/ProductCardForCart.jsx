import React from "react";
import { useFilter } from "../../Context/index";
import "./Card.css";
import { AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai";

export const ProductCardForCart = () => {
  const { state, dispatch } = useFilter();
  const { cartList } = state;
  return (
    <>
      {cartList &&
        cartList.map((item) => (
          <div className="horizontal-card" key={item.cartItem.id}>
            <div className="horizontal-card-image">
              <img
                src={item.cartItem.img}
                alt=""
                className="product-card-img"
              />
            </div>
            <div className="horizontal-card-sectionTwo flex-col">
              <div className="horizontal-card-content">
                <h3 className="vertical-card-content-one margin-top-bottom-zero">
                  {item.cartItem.productBrand}
                </h3>
                <h4 className="vertical-card-content-two margin-top-bottom-zero">
                  {item.cartItem.productDetail}
                </h4>
                <div className="vertical-card-content-three flex-start-row">
                  <p className="margin-top-bottom-zero current-price">
                    Rs.{item.cartItem.price}
                  </p>
                  <p className="margin-top-bottom-zero original-price">
                    Rs.{item.cartItem.originalPrice}
                  </p>
                  <p className="margin-top-bottom-zero discount-text">
                    {item.cartItem.discount}%
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
                  className="primary-btn-md-two"
                  onClick={() =>
                    dispatch({ type: "REMOVE_FROM_CART", payload: item })
                  }
                >
                  Remove from cart
                </button>
                <button
                  className="secondary-btn-md"
                  onClick={() =>
                    dispatch({
                      type: "ADD_TO_WISHLIST",
                      payload: item.cartItem,
                    })
                  }
                >
                  Move to wishlist
                </button>
              </div>
            </div>
          </div>
        ))}
    </>
  );
};
