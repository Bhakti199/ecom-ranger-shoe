import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import { ProductListProvider } from "./Context/index";

makeServer();

ReactDOM.render(
  <React.StrictMode>
    <ProductListProvider>
      <Router>
        <App />
      </Router>
    </ProductListProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
