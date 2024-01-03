import React from "react";
import { Redirect, Route } from "react-router-dom";
import Cookies from "js-cookie";

const ProtectedRoute = ({ children, ...rest }) => {
    const user = Cookies.get("userInfo");
    const userInfo = user ? JSON.parse(user) : null;
    const isAuthenticated = userInfo && userInfo.token;


  return (
    <Route
      {...rest}
      render={({ location }) =>
      isAuthenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default ProtectedRoute;
