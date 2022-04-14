import React from "react";
import { useState } from "react";
import { FilterSidebar, ProductCard } from "../../Components/Index";
import { useFilter } from "../../Context/FilterContext/FilterProvider";
import { BsFilter } from "react-icons/bs";
import "./ProductListingPage.css";
export const ProductListingPage = () => {
  const { showProductList, dispatch } = useFilter();
  const [openFilterBar, setOpenFilterBar] = useState(false);
  const [imageDisplay, setImageDisplay] = useState("products");

  return (
    <>
      <div
        className={`${openFilterBar ? "drawer-background" : ""}`}
        onClick={() => setOpenFilterBar(false)}
      ></div>
      <div className="product-listing-page">
        <FilterSidebar
          openFilterBar={openFilterBar}
          setOpenFilterBar={setOpenFilterBar}
        />
        <div className="main">
          <div className="sort-by-row-container">
            <div>{showProductList.length} Items</div>
            <span
              className="cursor"
              onClick={() => dispatch({ type: "CLEAR_CATEGORY" })}
            >
              All items
            </span>
            <div
              className={`cursor ${
                imageDisplay === "models"
                  ? "border-bottom-green"
                  : "border-bottom-white"
              }`}
              onClick={() => setImageDisplay("models")}
            >
              Models
            </div>
            <div
              className={`cursor ${
                imageDisplay === "products"
                  ? "border-bottom-green"
                  : "border-bottom-white"
              }`}
              onClick={() => setImageDisplay("products")}
            >
              Products
            </div>
            <hr className="line-between"></hr>
            <span
              className="btn-filter cursor"
              onClick={() => setOpenFilterBar(!openFilterBar)}
            >
              <BsFilter size={18} /> Filters
            </span>

            <div className="sort-by-display-control">
              <div className="sort-by-container ">
                <select
                  className="select-menu"
                  onChange={(e) => dispatch({ type: e.target.value })}
                >
                  <option value={"CLEAR_SORT_BY"}>Sort By</option>
                  <option value={"PRICE_LOW_TO_HIGH"}>
                    price- low to high
                  </option>
                  <option value={"PRICE_HIGH_TO_LOW"}>
                    price- high to low
                  </option>
                  <option value={"SORT_ASCENDING_ORDER"}>Name (A-Z)</option>
                  <option value={"SORT_DESCENDING_ORDER"}>Name (Z-A))</option>
                </select>
              </div>
            </div>
          </div>

          <div className="products">
            <ProductCard imageDisplay={imageDisplay} />
          </div>
        </div>
      </div>
    </>
  );
};
