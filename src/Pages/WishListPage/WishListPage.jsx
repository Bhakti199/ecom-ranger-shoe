import React from "react";
import "./WishListPage.css";
import "../../Components/ProductCard/ProductCard.css";
import { useFilter } from "../../Context/index";
import { BsFillStarFill, BsFillHeartFill, BsCart2 } from "react-icons/bs";
import { FaRupeeSign } from "react-icons/fa";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
export const WishListPage = () => {
  const { state, dispatch } = useFilter();
  const { wishList } = state;
  return (
    <>
      <div className="landing-page bg-color">
        <h2 className="wishlist-page-title">FAVOURITES</h2>
        <div className="wishlist-page flex wrap">
          {wishList.length > 0 ? (
            wishList.map((item) => (
              <div className="wishlist-card">
                <section className="ecom-product-card" key={item._id}>
                  <div className="vertical-card-product">
                    <div className="vertical-card-img-container">
                      <Link to={`/single-product-page/${item.id}`}>
                        <img
                          src={item.productImg}
                          alt="product"
                          className="responsive-img-card cursor"
                        />
                      </Link>
                      <span className="wishlist flex-row-center">
                        {wishList.some(
                          (product) => product._id === item._id
                        ) ? (
                          <BsFillHeartFill
                            size={21}
                            className="wishList-icon"
                            onClick={() => {
                              dispatch({
                                type: "REMOVE_FROM_WISHLIST",
                                payload: item,
                              }),
                                toast("removed from wishlist", { icon: "❌" });
                            }}
                          />
                        ) : (
                          <BsHeart
                            size={21}
                            onClick={() => {
                              dispatch({
                                type: "ADD_TO_WISHLIST",
                                payload: item,
                              }),
                                toast("added to wishlist", { icon: "✔️" });
                            }}
                          />
                        )}
                      </span>
                    </div>
                    <div className="vertical-card-text">
                      <p className="margin-top-bottom-zero product-brand-name">
                        {item.productBrand}
                        {item.id}
                      </p>
                      <div className="">
                        <p className="margin-top-bottom-zero">
                          Rs.{item.price} ({item.ratings})
                        </p>
                      </div>
                    </div>
                    <div
                      className="add-to-cart-btn"
                      onClick={() => {
                        dispatch({ type: "ADD_TO_CART", payload: item }),
                          toast("added to cart", { icon: "✔️" });
                      }}
                    >
                      <BsCart2
                        size={17}
                        fontWeight={100}
                        className="cart-icon"
                      />
                    </div>
                  </div>
                </section>
              </div>
            ))
          ) : (
            <div className="wishlist-text">
              <div className="wishlist-text-title">
                SAVE YOUR FAVOURITE ITEMS
              </div>
              <p className="wishlist-text-description">
                Want to save the items that you love? Just click on the heart
                symbol on the product card and it will show up here.
              </p>
              <Link to="/product-listing">
                <button className="wishlist-browse-btn">Browse Now</button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
