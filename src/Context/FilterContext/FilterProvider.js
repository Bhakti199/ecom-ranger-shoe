import React, { createContext, useContext, useReducer } from "react";
import { composeFunction, functionList } from "./FilterUtils";
import { filterManagement } from "./FilterReducer";
import { useProductList } from "../index";
const FilterContext = createContext();

const FilterProvider = ({ children }) => {
  const { productList } = useProductList();

  const initialValue = {
    category: "",
    sortByRange: 0,
    sortByBrand: [],
    includeOutOfStock: "include",
    includeFastDelivery: "",
    sortByRatings: "",
    sortByOrder: "",
    sortByColor: "",
  };

  const [state, dispatch] = useReducer(filterManagement, initialValue);
  const showProductList = composeFunction(state, functionList, productList);

  return (
    <FilterContext.Provider
      value={{
        state,
        dispatch,
        showProductList,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

const useFilter = () => useContext(FilterContext);

export { useFilter, FilterProvider };
