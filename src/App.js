import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Products from "./components/product/Products.js";
import Cart from "./components/cart/Cart.js";
import Navbar from "./components/navbar/Navbar.js";
import Login from "./components/user/Login.js";
import Footer from "./components/footer/Footer.js";
import Orders from "./components/order/Orders.js";
import Register from "./components/user/Register.js";

function App() {
  const PATH = process.env.REACT_APP_PATH || "/sneakers";

  return (
    <div className="App">
      <Router basename={PATH}>
        <Navbar />
        <hr />
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/order" element={<Orders />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
