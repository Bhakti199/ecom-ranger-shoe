import { useEffect, useState } from "react";
import axios from "axios";
import "./Categories.css";
import { Link } from "react-router-dom";
import { useFilter } from "../../Context/FilterContext/FilterProvider";
export const Categories = () => {
  const [categoryList, setCategoryList] = useState([]);
  const { state, dispatch } = useFilter();
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
          onClick={() =>
            dispatch({ type: "SET_CATEGORY", payload: category.categoryName })
          }
        >
          {category.categoryName}
        </Link>
      ))}
    </div>
  );
};
