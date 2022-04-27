import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useProductList, useUser } from "../../Context/index";
import "./SingleProductPage.css";
import {
  BsStarFill,
  BsCart2,
  BsFillHeartFill,
  BsHeart,
  BsArrowLeft,
} from "react-icons/bs";

export const SingleProductPage = () => {
  const { productList } = useProductList();
  const { user, addItemToCart, addItemToWishlist, removeItemFromWishlist } =
    useUser();
  const { wishlist } = user;
  const product = useParams();
  const productToShow = productList.find((item) => item.id === product.product);
  const [mainImg, setMainImg] = useState(productToShow?.modelImg);
  useEffect(() => {
    setMainImg(productToShow?.modelImg);
  }, [productToShow?.modelImg]);

  return (
    <div>
      <Link to="/product-listing">
        <div className="back-to-products">
          <BsArrowLeft size={25} color="var(--black-color)" />
        </div>
      </Link>

      <div className="single-product-page">
        <div className="product-img-container">
          <div className="product-img-col">
            <div className="product-img-col-individual">
              <img
                src={productToShow?.modelImg}
                alt="product"
                className="responsive-img-product"
                onClick={() => setMainImg(productToShow?.modelImg)}
              />
            </div>
            <div className="product-img-col-individual">
              <img
                src={productToShow?.productImg}
                alt="product"
                className="responsive-img-product"
                onClick={() => setMainImg(productToShow?.productImg)}
              />
            </div>
            <div className="product-img-col-individual">
              <img
                src={productToShow?.imgOne}
                alt="product"
                className="responsive-img-product "
                onClick={() => setMainImg(productToShow?.imgOne)}
              />
            </div>
            <div className="product-img-col-individual">
              <img
                src={productToShow?.imgTwo}
                alt="product"
                className="responsive-img-product"
                onClick={() => setMainImg(productToShow?.imgTwo)}
              />
            </div>
            <div className="product-img-col-individual">
              <img
                src={productToShow?.imgThree}
                alt="product"
                className="responsive-img-product"
                onClick={() => setMainImg(productToShow?.imgThree)}
              />
            </div>
          </div>
          <div className="product-main-img">
            <img
              src={mainImg}
              alt="product"
              className="responsive-img-product"
            />
          </div>
        </div>
        <div className="product-detail-container">
          <div className="product-detail-part-one">
            <div className="single-product-title">
              {productToShow?.productDetail}
              {productToShow?.productBrand}
              <span className="single-product-wishlist">
                {wishlist &&
                wishlist.some(
                  (product) => product?.id === productToShow?.id
                ) ? (
                  <BsFillHeartFill
                    size={21}
                    className="wishList-icon"
                    onClick={() => removeItemFromWishlist(productToShow._id)}
                  />
                ) : (
                  <BsHeart
                    size={21}
                    onClick={() => addItemToWishlist(productToShow)}
                  />
                )}
              </span>
            </div>
            <p>Puma</p>
            <p>Rs. 2999</p>
            <p>
              REVIEWS:
              {[...Array(productToShow?.ratings)].map((ratings, index) => (
                <BsStarFill key={index} size={14} />
              ))}
            </p>
          </div>

          <Link to="/cart-page">
            <button
              className="single-product-cart-btn"
              onClick={() => addItemToCart(productToShow)}
            >
              <BsCart2 size={22} />
              Add
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
