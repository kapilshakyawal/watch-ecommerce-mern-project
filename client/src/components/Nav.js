import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Auth } from "../Auth";
import { successToast } from "./Toast/Toasts";
// bg-slate-900
const Nav = () => {
  const [navbar, setNavbar] = useState(false);
  const navigate = useNavigate()
const Logout = () => {
    localStorage.removeItem("token")
    successToast("Logout Successfully!")
    navigate("/")
}
  return (
    <nav className="shadow  bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0">
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <Link to="/">
              <h2 className="text-2xl font-bold text-white">WATCHES</h2>
            </Link>
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-white"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              <li className="text-white hover:text-indigo-200 font-bold">
                <Link to="/">Home</Link>
              </li>
              <li className="text-white hover:text-indigo-200 font-bold">
                <Link to="/products">Products</Link>
              </li>
              <li className="text-white hover:text-indigo-200 font-bold">
                <Link to="/about">About us</Link>
              </li>
              <li className="text-white hover:text-indigo-200 font-bold">
                <Link to="/contact">Contact us</Link>
              </li>
            </ul>
            {Auth() ? (
              <div className="mt-3 space-y-2 lg:hidden md:inline-block">
                <Link onClick={Logout}
                  to="/"
                  className="inline-block w-full px-4 py-2 text-center text-blue-800 bg-white rounded-md shadow hover:bg-gray-100 font-bold"
                >
                  Logout
                </Link>
              </div>
            ) : (
              <div className="mt-3 space-y-2 lg:hidden md:inline-block">
                <Link 
                  to="/login"
                  className="inline-block w-full px-4 py-2 text-center text-white bg-blue-700 rounded-md shadow hover:bg-gray-800 font-bold"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="inline-block w-full px-4 py-2 text-center text-blue-800 bg-white rounded-md shadow hover:bg-gray-100 font-bold"
                >
                  Signup
                </Link>
              </div>
            )}
          </div>
        </div>

        {Auth() ? (
          <div className="hidden space-x-2 md:inline-block">
            <Link onClick={Logout}
              to="/"
              className="px-4 py-2 text-blue-800 bg-white rounded-md shadow hover:bg-slate-600 hover:text-white font-bold"
            >
              Logout
            </Link>
          </div>
        ) : (
          <div className="hidden space-x-2 md:inline-block">
            <Link
              to="/login"
              className="px-4 py-2 text-white bg-blue-700 rounded-md shadow hover:bg-white  hover:text-blue-600 font-bold"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="px-4 py-2 text-blue-800 bg-white rounded-md shadow hover:bg-slate-600 hover:text-white font-bold"
            >
              Signup
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
  // <nav className="border bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
  //   <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
  //     <Link to="/" className="flex items-center">
  //       <img
  //         src="https://flowbite.com/docs/images/logo.svg"
  //         className="h-8 mr-3"
  //         alt="Flowbite Logo"
  //       />
  //       <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
  //         EComm
  //       </span>
  //     </Link>
  //     <button
  //       data-collapse-toggle="navbar-solid-bg"
  //       type="button"
  //       className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
  //       aria-controls="navbar-solid-bg"
  //       aria-expanded="false"
  //     >
  //       <span className="sr-only">Open main menu</span>
  //       <svg
  //         className="w-5 h-5"
  //         aria-hidden="true"
  //         xmlns="http://www.w3.org/2000/svg"
  //         fill="none"
  //         viewBox="0 0 17 14"
  //       >
  //         <path
  //           stroke="currentColor"
  //           stroke-linecap="round"
  //           stroke-linejoin="round"
  //           stroke-width="2"
  //           d="M1 1h15M1 7h15M1 13h15"
  //         />
  //       </svg>
  //     </button>
  //     <div className="hidden w-full md:block md:w-auto" id="navbar-solid-bg">
  //       <ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
  //         <li>
  //           <Link
  //             to="/"
  //             className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent"
  //             aria-current="page"
  //           >
  //             Home
  //           </Link>
  //         </li>
  //         <li>
  //           <Link
  //             to="/about"
  //             className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
  //           >
  //             About
  //           </Link>
  //         </li>
  //         <li>
  //           <Link
  //             to="/login"
  //             className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
  //           >
  //             Login
  //           </Link>
  //         </li>
  //         <li>
  //           <Link
  //             to="/signup"
  //             className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
  //           >
  //             Signup
  //           </Link>
  //         </li>
  //       </ul>
  //     </div>
  //   </div>
  // </nav>

  // <div  classNameName="flex justify-between w-screen  dark:bg-gray-800 text-white p-6 text-lg font-sans h-min fixed z-30">
  //   <div classNameName="flex w-full text-white"  >
  //     <ul classNameName="flex justify-evenly w-full" >
  //       <li>
  //         <Link to="/">Home</Link>
  //       </li>
  //       <li>
  //         <Link to="/about">About</Link>
  //       </li>
  //       <li>
  //         <Link to="/contact">Contact</Link>
  //       </li>
  //       <li>
  //         <Link>More</Link>
  //       </li>
  //     </ul>
  //   </div>
  //   <div classNameName="flex w-full self-end">
  //     <ul classNameName="flex justify-evenly w-full">
  //       <li>
  //         <Link to="/signup">Signup</Link>
  //       </li>
  //       <li>
  //         <Link to="/login">Login</Link>
  //       </li>
  //     </ul>
  //   </div>
  // </div>
};

export default Nav;
