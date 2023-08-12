import React, { useState } from "react";
import Nav from "../Nav";
import { errorToast, successToast } from "../Toast/Toasts";
import { Loader } from "../../loader/Loading";

let srcData;
const AddProduct = () => {
  const [Loading, setLoading] = useState(false);

  const [Value, setValue] = useState({
    title: "",
    color: "",
    description: "",
    price: "",
    brand: "",
    file: "",
  });

  // const handleFileUpload = (e) => {
  //   if (e.target.files) {
  //     const fileReader = new FileReader();
  //     fileReader.onload = () => {
  //       srcData = fileReader.result;
  //       console.log(srcData);
  //       setData(srcData);
  //       setValue({...Value,[Value.file] : srcData})
  //     };
  //     fileReader.readAsDataURL(e.target.files[0]);
  //   }
  // };

  const handleInputValues = (e) => {
    setValue({ ...Value, [e.target.name]: e.target.value });
    if (e.target.files) {
      const fileReader = new FileReader();
      fileReader.onload = () => {
        srcData = fileReader.result;
        setValue({ ...Value, [e.target.name]: srcData });
      };
      fileReader.readAsDataURL(e.target.files[0]);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": true,
        "Access-Control-Allow-Origin": "*",
      },
      credentials: "include",
      body: JSON.stringify(Value),
    };
    try {
      setLoading(true);
      await fetch(`${window.BACKEND_URL}add/product`, requestOptions)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setLoading(false);
          !data.succsess
            ? successToast(data.message)
            : errorToast(data.message);
          Value.title = "";
          Value.color = "";
          Value.description = "";
          Value.file = "";
          Value.price = "";
          Value.brand = "";
        });
    } catch (error) {
      Value.title = "";
      Value.color = "";
      Value.description = "";
      Value.file = "";
      Value.price = "";
      Value.brand = "";
      console.log(error);
      errorToast("Internal server error!");
    }
  };
  return (
    <>
      {/* <!-- Main modal --> */}
      <Nav />
      <div
        id="defaultModal"
        tabIndex="-1"
        aria-hidden="true"
        className="flex z-10 justify-center items-center w-full md:inset-0 h-modal md:h-full my-20"
      >
        <div className="relative p-4 w-full max-w-2xl h-full md:h-auto ">
          {/* <!-- Modal content --> */}
          <div className="relative p-4 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
            {/* <!-- Modal header --> */}
            <div className="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Add Product
              </h3>
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-toggle="defaultModal"
              >
                <svg
                  aria-hidden="true"
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"></path>
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            {/* <!-- Modal body --> */}
            <form action="#">
              <div className="grid gap-4 mb-4 sm:grid-cols-2">
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Title
                  </label>
                  <input
                    onChange={handleInputValues}
                    // value={Value.title}
                    type="text"
                    name="title"
                    id="name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Type product name"
                    required=""
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Color
                  </label>
                  <input
                    onChange={handleInputValues}
                    // value={Value.color}
                    type="text"
                    name="color"
                    id="brand"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Color"
                    required=""
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Price
                  </label>
                  <input
                    onChange={handleInputValues}
                    // value={Value.number}
                    type="number"
                    name="price"
                    id="price"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="$2999"
                    required=""
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Brand
                  </label>
                  <select
                    onChange={handleInputValues}
                    name="brand"
                    id="category"
                    // value={Value.brand}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  >
                    <option defaultValue="">Select category</option>
                    <option value="titan">Titan</option>
                    <option value="casio">Casio</option>
                    <option value="fastrack">Fastrack</option>
                    <option value="sonata">Sonata</option>
                    <option value="timax">Timax</option>
                    <option value="rolex">Rolex</option>
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Description
                  </label>
                  <textarea
                    onChange={handleInputValues}
                    name="description"
                    id="description"
                    // value={Value.description}
                    rows="4"
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Write product description here"
                  ></textarea>
                </div>
                <div className="sm:col-span-2">
                  {Value.file ? (
                    <img src={Value.file} alt="img" />
                  ) : (
                    <>
                      {" "}
                      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Upload Images
                      </label>
                      <div className="flex items-center justify-center w-full">
                        <label className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                          <div className="flex flex-col items-center justify-center pt-5 pb-6">
                            <svg
                              className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 20 16"
                            >
                              <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                              />
                            </svg>
                            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                              <span className="font-semibold">
                                Click to upload{" "}
                              </span>
                              or drag and drop
                            </p>
                            <p className="text-2xl text-blue-700 dark:text-blue-700 font-bold">
                              {!Value.file
                                ? "SVG, PNG, JPG or GIF (MAX. 800x400px)"
                                : "Image uploaded"}
                            </p>
                          </div>
                          <input
                            id="dropzone-file"
                            name="file"
                            onChange={handleInputValues}
                            type="file"
                            className="hidden"
                            accept="image/*"
                            multiple
                          />
                        </label>
                      </div>{" "}
                    </>
                  )}
                </div>
              </div>
              <button
                onClick={handleSubmit}
                type="submit"
                className="text-white inline-flex items-center bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 bg-blue-700 hover:bg-blue-600"
              >
                <svg
                  className="mr-1 -ml-1 w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"></path>
                </svg>
                {Loading ? <Loader /> : "Add new product"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddProduct;
