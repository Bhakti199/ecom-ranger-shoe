import "./ProductCard.css";
import { BsFillStarFill, BsCart2 } from "react-icons/bs";
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
          <div className="vertical-card-product">
            <div className="vertical-card-img-container">
              <img src={item.img} alt="" className="responsive-img-card" />
              <span className="wishlist flex-row-center">
                {wishList.some((product) => product._id === item._id) ? (
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
                      dispatch({ type: "ADD_TO_WISHLIST", payload: item }),
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
            <div className="add-to-cart-btn">
              <BsCart2 size={17} fontWeight={100} className="cart-icon" />
            </div>
          </div>
        </section>
      ))}
    </>
  );
};
