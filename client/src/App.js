import "./App.css";
import About from "./components/About";
import ChangePassword from "./components/ChangePassword";
import AddProduct from "./components/products/AddProduct";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Login from "./components/Login";
import Notfound from "./components/Notfound";
import Products from "./components/Products";
import Profile from "./components/Profile";
import Signup from "./components/Signup";
import { Routes, Route } from "react-router-dom";
import PrivateRoute from "./components/privateRoute/PrivateRoute";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/profile" element={<Profile />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/products" element={<Products />} />
        <Route exact path="/change/password" element={<ChangePassword />} />
        <Route exact path="/product" element={<PrivateRoute />}>
          <Route exact path="add" element={<AddProduct />} />
        </Route>
       

        <Route exact path="*" element={<Notfound />} />
      </Routes>
    </>
  );
}

export default App;
