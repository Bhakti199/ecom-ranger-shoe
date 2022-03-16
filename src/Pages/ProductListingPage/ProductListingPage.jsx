import React from "react";
import { FilterSidebar } from "../../Components/Index";
import { ProductCard } from "../../Components/ProductCard/ProductCard";
import "./ProductListingPage.css";
export const ProductListingPage = () => {
  return (
    <div>
      <FilterSidebar />
      <div className="main products">
        <ProductCard />
      </div>
    </div>
  );
};
