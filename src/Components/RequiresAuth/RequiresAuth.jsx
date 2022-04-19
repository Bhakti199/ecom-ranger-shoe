import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useUser } from "../../Context/index";
import { LoginPage } from "../../Pages";
export const RequiresAuth = ({ children }) => {
  const { isUserLoggedIn } = useUser();
  const location = useLocation();
  return (
    <>
      {isUserLoggedIn ? (
        children
      ) : (
        <Navigate
          to="/login"
          element={<LoginPage />}
          state={{ from: location }}
          replace
        />
      )}
    </>
  );
};
