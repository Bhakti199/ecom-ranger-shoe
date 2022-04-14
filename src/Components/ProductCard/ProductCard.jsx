import "../../Pages/WishListPage/WishListPage.css";
import { BsFillStarFill } from "react-icons/bs";
import { BsFillHeartFill, BsHeart } from "react-icons/bs";
import { FaRupeeSign } from "react-icons/fa";
import { useFilter } from "../../Context/index";
import toast from "react-hot-toast";
export const ProductCard = () => {
  const { showProductList, dispatch, state } = useFilter();
  const { wishList } = state;
  return (
    <>
      {showProductList.map((item) => (
        <section className="flex-row-center" key={item._id}>
          <div className="vertical-card flex-col-center">
            <div className="vertical-card-image">
              <img src={item.img} alt="" className="product-card-img" />
              <button className="wishlist-btn-passive flex-row-center">
                {wishList.some((product) => product._id === item._id) ? (
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
                ) : (
                  <BsHeart
                    onClick={() => {
                      dispatch({ type: "ADD_TO_WISHLIST", payload: item }),
                        toast("added to wishlist", { icon: "✔️" });
                    }}
                  />
                )}
              </button>
            </div>
            <div className="vertical-card-content">
              <div className="flex">
                <h3 className="vertical-card-content-one margin-top-bottom-zero margin-auto">
                  {item.productBrand}
                  {item.id}
                </h3>
                <div className="numbered-rating flex-row-center">
                  <span className="numbered-rating-item">{item.ratings}</span>
                  <span className="numbered-rating-item">
                    <BsFillStarFill />
                  </span>
                </div>
              </div>

              <h4 className="vertical-card-content-two margin-top-bottom-zero justify card-product-detail">
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
      ))}
    </>
  );
};
