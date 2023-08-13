import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Auth } from "../Auth";
import "../index.css";
import { infoToast } from "./Toast/Toasts";

const Nav = () => {
  const navigate = useNavigate();
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      // "Access-Control-Allow-Origin": "http://localhost:7000/",
      "Access-Control-Allow-Credentials": "true",
    },
    credentials: "include",
  };

  const Logout = async () => {
    console.log(`${window.BACKEND_URL}`)
    await fetch(`${window.BACKEND_URL}logout`, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        localStorage.removeItem("ROLE");
        localStorage.removeItem("token");
        infoToast("Logout Successfully!");
        navigate("/");
        console.log(data);
});
  };
  return (
    <nav className="navbar">
      {/* <!-- LOGO --> */}
      <div className="logo">
        <Link to="/">
          <h2 className="text-2xl font-bold text-white">WATCHES</h2>
        </Link>
      </div>

      {/* <!-- NAVIGATION MENU --> */}
      <ul className="nav-links">
        {/* <!-- USING CHECKBOX HACK --> */}
        <input type="checkbox" id="checkbox_toggle" />
        <label for="checkbox_toggle" className="hamburger">
          &#9776;
        </label>

        {/* <!-- NAVIGATION MENUS --> */}
        <div className="menu">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>

          <li className="services">
            <Link to="/products">Products</Link>

            {/* <!-- DROPDOWN MENU --> */}
            {/* <ul className="dropdown">
              <li>
                <Link to="/">Dropdown 1 </Link>
              </li>
              <li>
                <Link to="/">Dropdown 2</Link>
              </li>
              <li>
                <Link to="/">Dropdown 2</Link>
              </li>
              <li>
                <Link to="/">Dropdown 3</Link>
              </li>
              <li>
                <Link to="/">Dropdown 4</Link>
              </li>
            </ul> */}
          </li>

          <li>
            <Link to="/contact">Contact</Link>
          </li>
          {Auth() ? (
            <li>
            <button  onClick={Logout} >
              Logout
            </button>
            </li>
          ) : (
            <li>
              <Link to="/login">Login</Link>
            </li>
          )}
        </div>
      </ul>
    </nav>
  );
};

export default Nav;
