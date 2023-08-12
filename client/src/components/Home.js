import React, { useEffect } from "react";
import Nav from "./Nav";
import { Link, useNavigate } from "react-router-dom";
import Popups from "./popups/Popups";
import { Auth } from "../Auth";

const Home = () => {
  const role = localStorage.getItem("ROLE");
  const navigate = useNavigate();
  useEffect(() => {
    console.log(role === "BUYER")
    console.log(role === "SELLER")
    if (role === "BUYER") {
      navigate("/user/buyer-landing-page");
    } else if (role === "SELLER") {
      navigate("/user/seller-landing-page");
    } else {
      navigate("/");
    }
  }, []);

  return (
    <>
      <Nav />
      <Popups />
      <section className="bg-white dark:bg-gray-900 h-screen py-20 w-screen flex justify-center align-middle">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-sm text-center">
            <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-8xl text-primary-600 text-white">
              ECOMM PLATFORM
            </h1>
            <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">
              BUY AND SELL
            </p>
            <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
              A online platform for the buyers and sellers.
            </p>
            <Link
              to="/login"
              className="inline-flex text-white bg-blue-600 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900 my-4"
            >
              Getting Start
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
