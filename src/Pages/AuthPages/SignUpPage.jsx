import React from "react";
import "./Auth.css";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { postNewUser } from "../../ApiCalls/postNewUser";
import { useUser, useProductList } from "../../Context";
import { BsCheckCircleFill, BsXCircleFill } from "react-icons/bs";
import toast from "react-hot-toast";
export const SignUpPage = () => {
  const { setShowLoader } = useProductList();
  const navigate = useNavigate();
  const location = useLocation();
  const { setUser, setIsUserLoggedIn, isUserLoggedIn } = useUser();
  const signUpDetailsHandler = async (event) => {
    event.preventDefault();
    const [firstName, lastName, email, password] = event.target.elements;
    setShowLoader(true);
    const { data, status } = await postNewUser(
      firstName.value,
      lastName.value,
      email.value,
      password.value
    );
    if (status === 201) {
      setIsUserLoggedIn(true);
      setUser({ ...data.createdUser });
      setShowLoader(false);
      toast("successfully signed up", { icon: <BsCheckCircleFill /> });
      navigate(location?.state?.from?.pathname || "/product-listing");
    } else {
      toast("Error occured, please try after some time.");
    }
  };

  return (
    <div className="login-page">
      {isUserLoggedIn ? (
        <>
          "user profile will be here."
          <button onClick={() => setIsUserLoggedIn(false)}>logout</button>
        </>
      ) : (
        <form
          className="login-form-ecom"
          onSubmit={(event) => signUpDetailsHandler(event)}
        >
          <h2 className="margin-top-bottom-zero center-text">SIGN UP</h2>
          <div className="form-inputs">
            <input
              type="text"
              placeholder="First Name"
              className="form-input-ecom"
              required
            />
            <input
              type="text"
              placeholder="Last Name"
              className="form-input-ecom"
              required
            />

            <input
              type="text"
              placeholder="E-mail"
              className="form-input-ecom"
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="form-input-ecom"
              required
            />
          </div>
          <button type="submit" className="login-form-btn">
            Sign Up
          </button>
          <p className="register-text">
            Already a user? <Link to="/login">LOGIN</Link>
          </p>
        </form>
      )}
    </div>
  );
};
