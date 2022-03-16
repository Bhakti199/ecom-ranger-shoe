import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import "./Categories.css";
const Categories = () => {
  const [categoryList, setCategoryList] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("/api/categories");
        const listCategory = response.data.categories;
        console.log(listCategory);
        setCategoryList(listCategory);
      } catch {
        console.log("error occured.");
      }
    })();
  }, []);
  return (
    <div className="categories">
      {categoryList.map((category) => (
        <h3 key={category._id} className="category">
          {category.categoryName}
        </h3>
      ))}
    </div>
  );
};

export default Categories;
