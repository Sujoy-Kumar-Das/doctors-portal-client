import React, { useContext } from "react";
import { AuthProvider } from "../contexts/authContext/AuthContextProvider";
import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../hookes/useAdmin";

const PrivetRouer = ({ children }) => {
  const { user, loader } = useContext(AuthProvider);
  const location = useLocation();
  const [isAdmin, adminLoading] = useAdmin(user.email);
  if (loader || adminLoading) {
    return <button className=" loading"></button>;
  }
  if (user && isAdmin) {
    return children;
  } else {
    return (
      <Navigate state={{ from: location }} replace to={"/login"}></Navigate>
    );
  }
};

export default PrivetRouer;
