import Home from "./components/home/Home";
import './index.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./screens/Login";
import Signup from "./screens/Signup";
import Cart from "./components/cart/Cart";
import DetailedPage from "./components/detailedPage/DetailedPage";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/DetailedPage" element={<DetailedPage />} />
        </Routes>
      </Router>


    </div>
  );
}

export default App;
