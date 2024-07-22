import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Products from "./components/product/Products.js";
import Cart from "./components/cart/Cart.js";
import Navbar from "./components/navbar/Navbar.js";
import Login from "./components/user/Login.js";
import Footer from "./components/footer/Footer.js";
import Orders from "./components/order/Orders.js";
import Register from "./components/user/Register.js";
import ProductDetails from "./components/product/ProductDetails.js";

function App() {
  const PATH = process.env.REACT_APP_PATH;

  return (
    <div className="App">
      <Router basename={PATH}>
        <Navbar />
        <hr />
        <Routes>
          <Route path="/" index element={<Products/>} />
          <Route path="/:productId" element={<ProductDetails/>} />
          <Route path="/order" element={<Orders />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" index element={<Register />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
