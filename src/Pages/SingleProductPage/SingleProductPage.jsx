import React, { useEffect } from "react";
import "./SingleProductPage.css";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import {
  BsStarFill,
  BsCart2,
  BsFillHeartFill,
  BsHeart,
  BsArrowLeft,
} from "react-icons/bs";
import { useFilter, useProductList } from "../../Context/index";
import { useParams } from "react-router-dom";
import { useState } from "react";
export const SingleProductPage = () => {
  const { dispatch, state } = useFilter();
  const { productList } = useProductList();
  const { wishList } = state;
  const product = useParams();
  const productToShow = productList.find((item) => item.id === product.product);
  console.log(productToShow?.modelImg);
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
                {wishList.some(
                  (product) => product?.id === productToShow?.id
                ) ? (
                  <BsFillHeartFill
                    size={21}
                    className="wishList-icon"
                    onClick={() => {
                      dispatch({
                        type: "REMOVE_FROM_WISHLIST",
                        payload: productToShow,
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
                        payload: productToShow,
                      }),
                        toast("added to wishlist", { icon: "✔️" });
                    }}
                  />
                )}
              </span>
            </div>
            <p>Puma</p>
            <p>Rs. 2999</p>
            <p>REVIEWS: {}</p>
          </div>

          <button
            className="single-product-cart-btn"
            onClick={() => {
              dispatch({ type: "ADD_TO_CART", payload: productToShow }),
                toast("added to cart", { icon: "✔️" });
            }}
          >
            <BsCart2 size={22} />
            Add
          </button>
        </div>
      </div>
    </div>
  );
};
