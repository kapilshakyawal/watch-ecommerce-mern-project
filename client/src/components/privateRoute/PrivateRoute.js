import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { Auth } from "../../Auth";


const PrivateRoute = () => {
    return Auth() ? <Outlet /> : <Navigate to="/login" />;

};

export default PrivateRoute;
