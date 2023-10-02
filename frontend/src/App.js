import './index.css';
import Rout from "./components/rout";
import { ProductData } from './components/product/ProductData';
import { useState } from 'react';


const App = () => {
  // add to cart
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  }

  const [product, setProduct] = useState(ProductData)
  return (
    <div>
      <Rout product={product} setProduct={setProduct} cart={cart} setCart={setCart} addToCart={addToCart} />

    </div>
  );
}

export default App;
