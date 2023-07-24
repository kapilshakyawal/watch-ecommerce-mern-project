import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Nav from "./Nav";
import { errorToast, successToast } from "./Toast/Toasts";
let result;
const Signup = () => {
  const navigate = useNavigate()
  const [Value, setValue] = useState({
    fullName: "",
    email: "",
    password: "",
    role: "",
  });
  const handleChanges = (e) => {
    // console.log({[e.target.name]: e.target.value })
    setValue({ ...Value, [e.target.name]: e.target.value });
    // console.log({[e.target.name] : e.target.value})
    // console.log(Value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(Value);
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Value),
    };
    console.log(requestOptions)
    await fetch(`${window.BACKEND_URL}signup`, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        result = data;
        console.log(data);
      });
    if (result.success) {
      navigate("/login");
      successToast("Signup Successfully! Please Login.");
    } else {
      errorToast("Internal Server Error!");
    }
  };
  console.log(Value)

  return (
    <>
      <Nav />
      <div className="flex items-center justify-center h-screen dark:bg-gray-900">
        <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
          <form className="space-y-6" action="#">
            <h5 className="text-xl font-medium text-gray-900 dark:text-white">
              Signup to our platform
            </h5>
            <div>
              <label
                for="fullName"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Name
              </label>
              <input
                onChange={handleChanges}
                type="text"
                name="fullName"
                id="fullName"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                placeholder="name@company.com"
                required
              />
            </div>
            <div>
              <label
                for="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Email
              </label>
              <input
                onChange={handleChanges}
                type="email"
                name="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                placeholder="name@company.com"
                required
              />
            </div>
            <div>
              <label
                for="password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your password
              </label>
              <input
                onChange={handleChanges}
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                required
              />
            </div>

            <label
              htmlFor="countries"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Select a Role
            </label>
            <select
              onChange={handleChanges} name="role"
              id="countries"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option selected>Choose a role</option>
              <option value="SELLER">SELLER</option>
              <option value="BUYER">BUYER</option>
            </select>

            <div className="flex items-start">
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="remember"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                    required
                  />
                </div>
                <label
                  for="remember"
                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Remember me
                </label>
              </div>
              {/* <Link to="" className="ml-auto text-sm text-blue-700 hover:underline dark:text-blue-500">Lost Password?</Link> */}
            </div>
            <button
              type="submit"
              onClick={handleSubmit}
              className="w-full text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focusLink ing-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-gray
gray-700 dark:focus:ring-blue-800"
            >
              Create Account
            </button>
            <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
              Already registered?{" "}
              <Link
                to="/login"
                className="text-blue-700 hover:underline dark:text-blue-500"
              >
                Login
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
