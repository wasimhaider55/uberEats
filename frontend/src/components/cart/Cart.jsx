import React, { useState } from 'react';

const Cart = ({ product }) => {
  const [quantity, setQuantity] = useState(1); // Initialize quantity with 1

  // Function to handle quantity changes
  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value, 10);
    setQuantity(newQuantity);
  };

  return (
    <div>
      <div>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREAvfrlPSKwyKd2K0V_MP8hhXjh9boNfjThQ&usqp=CAU"
          alt="title"
        />
      </div>
      <div>
        <p>Sun's Out, BOGO's Out</p>
        <p>Through 8/26</p>
        {/* <h1>Rs {product.price * quantity}</h1> */}
        <label>
          Quantity:
          <input
            type="number"
            value={quantity}
            onChange={handleQuantityChange}
            min={1} // Set minimum value for quantity
          />
        </label>
      </div>
    </div>
  );
};

export default Cart;
