import React from "react";
import { Navigate } from "react-router-dom";
import { isLoggedIn } from "./isLoggedIn";
import PropTypes from "prop-types";

const PublicRoute = ({ children }) => {
  return isLoggedIn() === true && isLoggedIn() === false ? <Navigate to="/" replace /> : children;
};

export default PublicRoute;

PublicRoute.propTypes = {
  children: PropTypes.object,
};
