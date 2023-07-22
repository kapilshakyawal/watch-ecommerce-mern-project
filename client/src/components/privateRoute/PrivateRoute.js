import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { Auth } from "../../Auth";

const PrivateRoute = () => {
    console.log("Privater route file ", Auth())
  return Auth() ? <Outlet /> : <Navigate to="/login" />;
};
// const PrivateRouteRoles = () => {
//   const role = checkForRole();
//   if (role === "BUYER") {
//     <Outlet />;
//     {
//       /* <Navigate to="/buyer-landing-page" />; */
//     }
//   } else if (role === "SELLER") {
//     <Outlet />;
//     {
//       /* <Navigate to="/seller-landing-page" />; */
//     }
//   } else {
//     <Navigate to="/login" />;
//   }
// };

export default PrivateRoute;
