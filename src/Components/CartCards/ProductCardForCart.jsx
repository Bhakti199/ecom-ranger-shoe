import React from "react";

export const ProductCardForCart = () => {
  return (
    <div>
      <div className="horizontal-card" key={item.item.id}>
        <div className="horizontal-card-image">
          <img src={item.item.img} alt="" className="product-card-img" />
        </div>
        <div className="horizontal-card-sectionTwo flex-col">
          <div className="horizontal-card-content">
            <h3 className="vertical-card-content-one margin-top-bottom-zero">
              {item.item.productBrand}
            </h3>
            <h4 className="vertical-card-content-two margin-top-bottom-zero">
              {item.item.productDetail}
            </h4>
            <div className="vertical-card-content-three flex-start-row">
              <p className="margin-top-bottom-zero current-price">
                {item.item.price}
              </p>
              <p className="margin-top-bottom-zero original-price">
                {item.item.originalPrice}
              </p>
              <p className="margin-top-bottom-zero discount-text">
                {item.item.discount}
              </p>
            </div>
            <div className="quantity-section flex">
              <span>quantity:</span>
              <button
                className="incre-decre-btn flex-row-center"
                onClick={() => decrementItemCount(item.item)}
              >
                <i className="fas fa-minus"></i>
              </button>
              <span className="quantity">{item.count}</span>
              <button
                className="incre-decre-btn"
                onClick={() => incrementItemCount(item.item)}
              >
                <i className="fas fa-plus"></i>
              </button>
            </div>
          </div>
          <div className="horizontal-card-btn flex-col-center">
            <button
              className="primary-btn-md-two"
              onClick={() => removeFromCart(item.item)}
            >
              Remove from cart
            </button>
            <button className="secondary-btn-md">Move to wishlist</button>
          </div>
        </div>
      </div>
    </div>
  );
};
