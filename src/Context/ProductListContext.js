import axios from "axios";
import { useContext, createContext, useState, useEffect } from "react";

const ProductListContext = createContext([]);

const ProductListProvider = ({ children }) => {
  const [showLoader, setShowLoader] = useState(true);

  const [productList, setProductList] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const {
          data: { products },
        } = await axios.get("/api/products");
        setProductList(products);
        setShowLoader(false);
      } catch {
        console.error("error occured");
      }
    })();
  }, []);

  return (
    <ProductListContext.Provider
      value={{ productList, showLoader, setShowLoader }}
    >
      {children}
    </ProductListContext.Provider>
  );
};

const useProductList = () => useContext(ProductListContext);

export { useProductList, ProductListProvider };
