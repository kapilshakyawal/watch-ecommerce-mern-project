import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Nav from "./Nav";
import { errorToast, successToast } from "./Toast/Toasts";
let result;

// const successToast = () => {
//   return toast.success("Login Successfully", {
//     position: "top-right",
//     autoClose: 1000,
//     hideProgressBar: false,
//     closeOnClick: true,
//     pauseOnHover: true,
//     draggable: true,
//     progress: undefined,
//     theme: "dark",
//     })
// }
// const errorToast = () => {
//   return toast.error("Internal Server Error",{
//     position: "top-right",
//     autoClose: 1000,
//     hideProgressBar: false,
//     closeOnClick: true,
//     pauseOnHover: true,
//     draggable: true,
//     progress: undefined,
//     theme: "dark",
//     })
// }
const Login = () => {
  const navigate = useNavigate();
  const [Value, setValue] = useState({
    email: "",
    password: "",
  });
  const handleChanges = (e) => {
    setValue({ ...Value, [e.target.name]: e.target.value });
    // console.log({[e.target.name] : e.target.value})
    console.log(Value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(Value);
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "`${window.BACKEND_URL}",
        "Access-Control-Allow-Credentials": "true",
      },
      credentials: "include",
      body: JSON.stringify(Value),
    };
    console.log("start");
    await fetch(`${window.BACKEND_URL}login`, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        console.log(JSON.stringify(data));
        console.log(data.success);
        result = data;
        if (data.token) {
          localStorage.setItem("token", data.token);
        }
      });
    if (result.success) {
      successToast("Login successfully");
      navigate("/");
    } else {
      errorToast("Internal Server Error!");
    }
    console.log("end");
  };

  return (
    <>
      <Nav />
      <div className="flex items-center justify-center h-screen dark:bg-gray-900">
        <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
          <form className="space-y-6" action="#">
            <h5 className="text-xl font-medium text-gray-900 dark:text-white">
              Login to our platform
            </h5>
            <div>
              <label
                for="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your email
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
              <Link
                to="/change/password"
                className="ml-auto text-sm text-gray-700 hover:underline dark:text-blue-500"
              >
                Lost Password?
              </Link>
            </div>
            <button
              onClick={handleSubmit}
              type="submit"
              className="w-full text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focusLink ing-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
            >
              Login to your account
            </button>
            <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
              Not registered?{" "}
              <Link
                to="/signup"
                className="text-blue-700 hover:underline dark:text-blue-500"
              >
                Create account
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
