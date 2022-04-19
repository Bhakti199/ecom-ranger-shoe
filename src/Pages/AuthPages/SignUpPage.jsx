import React from "react";
import "./Auth.css";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { postNewUser } from "../../ApiCalls/postNewUser";
import { useUser } from "../../Context/index";
export const SignUpPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { setUser, setIsUserLoggedIn, isUserLoggedIn } = useUser();
  const signUpDetailsHandler = (event) => {
    event.preventDefault();
    const [firstName, lastName, email, password] = event.target.elements;

    (async () => {
      const { data, status } = await postNewUser(
        firstName.value,
        lastName.value,
        email.value,
        password.value
      );
      if (status === 201) {
        setIsUserLoggedIn(true);
        setUser({ ...data.createdUser });
        console.log(data.createdUser);
        navigate(location?.state?.from?.pathname || "/product-listing");
      }
    })();
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
