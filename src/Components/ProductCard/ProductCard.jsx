import { useProductList } from "../../Context/index";
import { BsFillStarFill } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { useFilter } from "../../Context/index";
export const ProductCard = () => {
  const { showProductList } = useFilter();
  return (
    <>
      {showProductList.map(
        ({
          id,
          img,
          productBrand,
          ratings,
          productDetail,
          price,
          originalPrice,
          discount,
        }) => (
          <section className="flex-row-center" key={id}>
            <div className="vertical-card flex-col-center">
              <div className="vertical-card-image">
                <img src={img} alt="" className="product-card-img" />
                <button className="wishlist-btn-passive flex-row-center">
                  <AiOutlineHeart />
                </button>
              </div>
              <div className="vertical-card-content">
                <div className="flex">
                  <h3 className="vertical-card-content-one margin-top-bottom-zero margin-auto">
                    {productBrand}
                    {id}
                  </h3>
                  <div className="numbered-rating flex-row-center">
                    <span className="numbered-rating-item">{ratings}</span>
                    <span className="numbered-rating-item">
                      <BsFillStarFill />
                    </span>
                  </div>
                </div>

                <h4 className="vertical-card-content-two margin-top-bottom-zero justify">
                  {productDetail}
                </h4>
                <div className="vertical-card-content-three flex-start-row">
                  <p className="current-price margin-top-bottom-zero">
                    Rs.{price}
                  </p>
                  <p className="original-price margin-top-bottom-zero">
                    Rs.{originalPrice}
                  </p>
                  <p className="discount-text margin-top-bottom-zero">
                    {discount}% Off
                  </p>
                </div>
              </div>
              <div className="card-btn-container">
                <button className="primary-btn-md-one">Add to cart</button>
              </div>
            </div>
          </section>
        )
      )}
    </>
  );
};
