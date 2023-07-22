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
import SellerLandingPage from "./components/SellerLandingPage"
import BuyerLandingPage from "./components/BuyerLandingPage"
function App() {
  return (
    <>
      <Routes>
        <Route exact path="*" element={<Notfound />} />
        <Route exact path="/" element={<Home />} />
        
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/login" element={<Login />} />
         ̰
        <Route exact path="/profile" element={<Profile />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/products" element={<Products />} />
        <Route exact path="/change/password" element={<ChangePassword />} />
        <Route exact path="/user" element={<PrivateRoute />}>
          <Route exact path="product/add" element={<AddProduct />} />
          <Route exact path="seller-landing-page" element={<SellerLandingPage />} />
          <Route exact path="buyer-landing-page" element={<BuyerLandingPage />} />
        </Route>
        
           ̰
      </Routes>
    </>
  );
}

export default App;
