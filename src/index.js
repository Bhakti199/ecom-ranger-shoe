import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import { ProductListProvider } from "./Context/index";
import { FilterProvider } from "./Context/index";
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ProductListProvider>
        <FilterProvider>
          <App />
        </FilterProvider>
      </ProductListProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
