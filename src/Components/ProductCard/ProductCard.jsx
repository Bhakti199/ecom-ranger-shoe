import "./ProductCard.css";
import { BsCart2, BsFillHeartFill, BsHeart } from "react-icons/bs";
import {
  // addItemToCartCall,
  addItemToWishlistCall,
  removeItemFromWishlistCall,
} from "../../ApiCalls";
import { useFilter, useUser } from "../../Context/index";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
export const ProductCard = ({ imageDisplay }) => {
  const { showProductList, dispatch } = useFilter();
  const { user, addItemToCart, addItemToWishlist, removeItemFromWishlist } =
    useUser();
  const { wishlist } = user;

  return (
    <>
      {showProductList.map((item) => (
        <section className="ecom-product-card" key={item._id}>
          <div className="vertical-card-product">
            <div className="vertical-card-img-container">
              <Link to={`/single-product-page/${item.id}`}>
                <img
                  src={
                    imageDisplay === "products"
                      ? item.productImg
                      : item.modelImg
                  }
                  alt="product"
                  className="responsive-img-card cursor"
                />
              </Link>
              <span className="wishlist flex-row-center">
                {wishlist &&
                wishlist.some((product) => product._id === item._id) ? (
                  <BsFillHeartFill
                    size={21}
                    className="wishList-icon"
                    onClick={() => {
                      removeItemFromWishlist(item._id);
                      toast("removed from wishlist", { icon: "❌" });
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
                addItemToCart(item);
              }}
            >
              <BsCart2 size={17} fontWeight={100} className="cart-icon" />
            </div>
          </div>
        </section>
      ))}
    </>
  );
};
