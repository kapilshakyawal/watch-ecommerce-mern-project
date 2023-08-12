import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Auth } from "../Auth";
import "../index.css";
import Popups from "./popups/Popups";
import { infoToast } from "./Toast/Toasts";

const Nav = () => {
  const [navbar, setNavbar] = useState(false);
  const [Popup, setPopup] = useState(false);
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
        // setPopup(true);
        // <Popups />;
      });
    setPopup(false);
    // navigate("/");
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
              {/* <Link   >Logout</Link> */}
            </li>
          ) : (
            <li>
              <Link to="/login">Login</Link>
            </li>
          )}
        </div>
      </ul>
    </nav>
    // <nav className="shadow  bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0">
    //   <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
    //     <div>
    //       <div className="flex items-center justify-between py-3 md:py-5 md:block">
    //         <Link to="/">
    //           <h2 className="text-2xl font-bold text-white">WATCHES</h2>
    //         </Link>
    //         <div className="md:hidden">
    //           <button
    //             className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
    //             onClick={() => setNavbar(!navbar)}
    //           >
    //             {navbar ? (
    //               <svg
    //                 xmlns="http://www.w3.org/2000/svg"
    //                 className="w-6 h-6 text-white"
    //                 viewBox="0 0 20 20"
    //                 fill="currentColor"
    //               >
    //                 <path
    //                   fillRule="evenodd"
    //                   d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
    //                   clipRule="evenodd"
    //                 />
    //               </svg>
    //             ) : (
    //               <svg
    //                 xmlns="http://www.w3.org/2000/svg"
    //                 className="w-6 h-6 text-white"
    //                 fill="none"
    //                 viewBox="0 0 24 24"
    //                 stroke="currentColor"
    //                 strokeWidth={2}
    //               >
    //                 <path
    //                   strokeLinecap="round"
    //                   strokeLinejoin="round"
    //                   d="M4 6h16M4 12h16M4 18h16"
    //                 />
    //               </svg>
    //             )}
    //           </button>
    //         </div>
    //       </div>
    //     </div>
    //     <div>
    //       <div
    //         className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
    //           navbar ? "block" : "hidden"
    //         }`}
    //       >
    //         <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
    //           <li className="text-white hover:text-indigo-200 font-bold">
    //             <Link to="/">Home</Link>
    //           </li>
    //           <li className="text-white hover:text-indigo-200 font-bold">
    //             <Link to="/products">Products</Link>
    //           </li>
    //           <li className="text-white hover:text-indigo-200 font-bold">
    //             <Link to="/about">About us</Link>
    //           </li>
    //           <li className="text-white hover:text-indigo-200 font-bold">
    //             <Link to="/contact">Contact us</Link>
    //           </li>
    //         </ul>

    //         <div className="mt-3 space-y-2 lg:hidden md:inline-block">
    //           <Link
    //             to="/login"
    //             className="inline-block w-full px-4 py-2 text-center text-white bg-blue-700 rounded-md shadow hover:bg-gray-800 font-bold"
    //           >
    //             Login
    //           </Link>
    //           <Link
    //             to="/signup"
    //             className="inline-block w-full px-4 py-2 text-center text-blue-800 bg-white rounded-md shadow hover:bg-gray-100 font-bold"
    //           >
    //             Signup
    //           </Link>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </nav>
  );
};

export default Nav;
