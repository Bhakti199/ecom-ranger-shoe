import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import "./Categories.css";
import { Link } from "react-router-dom";
const Categories = () => {
  const [categoryList, setCategoryList] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const {
          data: { categories },
        } = await axios.get("/api/categories");
        setCategoryList(categories);
      } catch {
        console.log("error occured.");
      }
    })();
  }, []);
  return (
    <div className="categories">
      {categoryList.map((category) => (
        <Link
          to={`/product-listing?categoryName=${category.categoryName}`}
          key={category._id}
          className="category"
        >
          {category.categoryName}
        </Link>
      ))}
    </div>
  );
};

export default Categories;
