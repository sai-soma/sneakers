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
  const PATH = process.env.REACT_APP_PATH || "/sneakers/sneakers";

  return (
    <div className="App">
      <Router basename={PATH}>
        <Navbar />
        <hr />
        <Routes>
          <Route path="/sneakers" index element={<Products/>} />
          <Route path="/sneakers/:productId" element={<ProductDetails/>} />
          <Route path="/sneakers/order" element={<Orders />} />
          <Route path="/sneakers/cart" element={<Cart />} />
          <Route path="/sneakers/login" element={<Login />} />
          <Route path="/sneakers/register" element={<Register />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
