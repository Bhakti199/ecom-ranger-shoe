import React from "react";
import { useState } from "react";
import { FilterSidebar } from "../../Components/Index";
import { ProductCard } from "../../Components/ProductCard/ProductCard";
import "./ProductListingPage.css";
export const ProductListingPage = () => {
  const [openFilterBar, setOpenFilterBar] = useState(false);
  return (
    <div>
      <button
        className="btn-filter"
        onClick={() => setOpenFilterBar(!openFilterBar)}
      >
        Filters
      </button>
      <FilterSidebar openFilterBar={openFilterBar} />
      <div className="main products">
        <ProductCard />
      </div>
    </div>
  );
};
