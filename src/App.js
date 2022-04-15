import "./App.css";
import { Navbar, NavbarMblView, Footer } from "./Components/Index";
import { Toaster } from "react-hot-toast";
import {
  Home,
  ProductListingPage,
  CartPage,
  WishListPage,
  SingleProductPage,
} from "./Pages/index";
import MockMan from "mockman-js";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <div className="desktop-navbar">
        <Navbar />
      </div>
      <div className="mbl-navbar">
        <NavbarMblView />
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mockman" element={<MockMan />} />
        <Route path="/product-listing" element={<ProductListingPage />} />
        <Route path="/cart-page" element={<CartPage />} />
        <Route path="/wishlist-page" element={<WishListPage />} />
        <Route
          path="/single-product-page/:product"
          element={<SingleProductPage />}
        />
      </Routes>

      <Toaster
        position="top-center"
        toastOptions={{ className: "toast", duration: 2000 }}
      />
      <Footer />
    </>
  );
}

export default App;
