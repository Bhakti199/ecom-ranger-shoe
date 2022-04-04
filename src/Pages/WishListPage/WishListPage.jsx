import React from "react";
import "./WishListPage.css";
import { useFilter } from "../../Context/index";
import { BsFillStarFill, BsFillHeartFill } from "react-icons/bs";
import { FaRupeeSign } from "react-icons/fa";
import toast from "react-hot-toast";
export const WishListPage = () => {
  const { state, dispatch } = useFilter();
  const { wishList } = state;
  return (
    <>
      <div className="landing-page bg-color">
        <h2 className="wishlist-page-title">My Wishlist</h2>
        <div className="wishlist-page flex wrap">
          {wishList.length > 0 ? (
            wishList.map((item) => (
              <section className="flex-row-center" key={item._id}>
                <div className="vertical-card flex-col-center">
                  <div className="vertical-card-image">
                    <img src={item.img} alt="" className="product-card-img" />
                    <button className="wishlist-btn-passive flex-row-center">
                      <BsFillHeartFill
                        className="wishList-icon"
                        onClick={() => {
                          dispatch({
                            type: "REMOVE_FROM_WISHLIST",
                            payload: item,
                          }),
                            toast("removed from wishlist", { icon: "❌" });
                        }}
                      />
                    </button>
                  </div>
                  <div className="vertical-card-content">
                    <div className="flex">
                      <h3 className="vertical-card-content-one margin-top-bottom-zero margin-auto">
                        {item.productBrand}
                        {item.id}
                      </h3>
                      <div className="numbered-rating flex-row-center">
                        <span className="numbered-rating-item">
                          {item.ratings}
                        </span>
                        <span className="numbered-rating-item">
                          <BsFillStarFill />
                        </span>
                      </div>
                    </div>

                    <h4 className="vertical-card-content-two margin-top-bottom-zero justify">
                      {item.productDetail}
                    </h4>
                    <div className="vertical-card-content-three flex-start-row">
                      <p className="current-price margin-top-bottom-zero">
                        <FaRupeeSign />
                        {item.price}
                      </p>
                      <p className="original-price margin-top-bottom-zero">
                        <FaRupeeSign />
                        {item.originalPrice}
                      </p>
                      <p className="discount-text margin-top-bottom-zero">
                        {item.discount} % Off
                      </p>
                    </div>
                  </div>
                  <div className="card-btn-container">
                    <button
                      className="primary-btn-md-one"
                      onClick={() => {
                        dispatch({ type: "ADD_TO_CART", payload: item }),
                          toast("added to cart", { icon: "✔️" });
                      }}
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              </section>
            ))
          ) : (
            <h3>Add Items to wishlist...</h3>
          )}
        </div>
      </div>
    </>
  );
};
