import "./App.css";
import {
  Navbar,
  NavbarMblView,
  Footer,
  RequiresAuth,
  Loaders,
} from "./Components/Index";
import { Toaster } from "react-hot-toast";
import {
  Home,
  ProductListingPage,
  CartPage,
  WishListPage,
  SingleProductPage,
  LoginPage,
  SignUpPage,
  PlaceOrderPage,
  UserProfilePage,
  CheckOutPage,
} from "./Pages/index";
import { useProductList } from "./Context";
import MockMan from "mockman-js";
import { Routes, Route } from "react-router-dom";

function App() {
  const { showLoader, setShowLoader } = useProductList();

  return (
    <>
      <div className="desktop-navbar">
        <Navbar />
      </div>
      <div className="mbl-navbar">
        <NavbarMblView />
      </div>
      {showLoader && (
        <div className="loader-container">
          <Loaders />
        </div>
      )}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mockman" element={<MockMan />} />
        <Route path="/product-listing" element={<ProductListingPage />} />
        <Route
          path="/user-profile"
          element={
            <RequiresAuth>
              <UserProfilePage />
            </RequiresAuth>
          }
        />

        <Route
          path="/cart-page"
          element={
            <RequiresAuth>
              <CartPage />
            </RequiresAuth>
          }
        />
        <Route
          path="/wishlist-page"
          element={
            <RequiresAuth>
              <WishListPage />
            </RequiresAuth>
          }
        />
        <Route
          path="/place-order"
          element={
            <RequiresAuth>
              <PlaceOrderPage />
            </RequiresAuth>
          }
        />
        <Route
          path="/checkout"
          element={
            <RequiresAuth>
              <CheckOutPage />
            </RequiresAuth>
          }
        />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route
          path="/single-product-page/:product"
          element={<SingleProductPage />}
        />
      </Routes>
      <Toaster
        position="top-center"
        toastOptions={{ className: "toast", duration: 3000 }}
      />
      <Footer />
    </>
  );
}

export default App;
