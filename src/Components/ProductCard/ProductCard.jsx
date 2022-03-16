import { useProductList } from "../../Context/index";
import { BsFillStarFill } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";

export const ProductCard = () => {
  const { productList } = useProductList();
  return (
    <>
      {productList.map((item) => (
        <section className="flex-row-center" key={item.id}>
          <div className="vertical-card flex-col-center">
            <div className="vertical-card-image">
              <img src={item.img} alt="" className="product-card-img" />
              <button className="wishlist-btn-passive flex-row-center">
                <AiOutlineHeart />
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

              <h4 className="vertical-card-content-two margin-top-bottom-zero">
                {item.productDetail}
              </h4>
              <div className="vertical-card-content-three flex-start-row">
                <p className="current-price margin-top-bottom-zero">
                  Rs.{item.price}
                </p>
                <p className="original-price margin-top-bottom-zero">
                  Rs.{item.originalPrice}
                </p>
                <p className="discount-text margin-top-bottom-zero">
                  {item.discount}% Off
                </p>
              </div>
            </div>
            <div className="card-btn-container">
              <button className="primary-btn-md-one">Add to cart</button>
            </div>
          </div>
        </section>
      ))}
    </>
  );
};
