import React from "react";
import { getUser } from "../../ApiCalls";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "./Auth.css";
import { useUser } from "../../Context/AuthContext/UserContext";
export const LoginPage = () => {
  const { setIsUserLoggedIn, setUser, isUserLoggedIn } = useUser();
  const navigate = useNavigate();
  const location = useLocation();

  const loginDetailsHandler = async (event) => {
    event.preventDefault();
    let [email, password] = event.target.elements;
    console.log("enteredd values", email.value, password.value);

    const { data, status } = await getUser(email.value, password.value);
    if (status === 200) {
      setIsUserLoggedIn(true);
      setUser({ ...data.foundUser });
      navigate(location?.state?.from?.pathname || "/product-listing");
      localStorage.setItem("userLoginToken", data.encodedToken);
    }
  };
  const GuestLoginHandler = async (email, password) => {
    const { data, status } = await getUser(email, password);
    if (status === 200) {
      setIsUserLoggedIn(true);
      setUser({ ...data.foundUser });
      navigate(location?.state?.from?.pathname || "/product-listing");
      localStorage.setItem("userLoginToken", data.encodedToken);
    }
  };

  return (
    <div className="login-page">
      {isUserLoggedIn ? (
        <>
          "user profile will be here"
          <button
            onClick={() => {
              setIsUserLoggedIn(false);
              localStorage.removeItem("userLoginToken");
            }}
          >
            logout
          </button>
        </>
      ) : (
        <>
          <div>
            <form
              className="login-form-ecom"
              onSubmit={(event) => {
                loginDetailsHandler(event);
              }}
            >
              <h2 className="margin-top-bottom-zero center-text">LOG IN</h2>
              <div className="form-inputs">
                <input
                  type="email"
                  name="email"
                  placeholder="E-mail"
                  className="form-input-ecom"
                  required
                />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="form-input-ecom"
                  required
                />
              </div>
              <button type="submit" className="login-form-btn">
                Login
              </button>
              <p className="register-text">
                Don't have an account? <Link to="/sign-up">REGISTER</Link>
              </p>
            </form>
          </div>
          <span
            className="center-text login-guest"
            onClick={() => GuestLoginHandler("johndoe@gmail.com", "johnDoe123")}
          >
            Log in as a guest.
          </span>
        </>
      )}
    </div>
  );
};
