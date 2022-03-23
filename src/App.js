import "./App.css";
import { Navbar } from "./Components/Index";
import {
  Home,
  ProductListingPage,
  CartPage,
  WishListPage,
} from "./Pages/index";
import MockMan from "mockman-js";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mockman" element={<MockMan />} />
        <Route path="/product-listing" element={<ProductListingPage />} />
        <Route path="/cart-page" element={<CartPage />} />
        <Route path="/wishlist-page" element={<WishListPage />} />
      </Routes>
    </div>
  );
}

export default App;
