import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
const DetailedPage = () => {
  // Use useParams to access the item's data passed from the URL
  const { title, price } = useParams();

  // Define price multipliers for each size
  const sizeMultipliers = {
    small: 1.0,   // No price adjustment for small
    medium: 1.2,  // 20% price increase for medium
    large: 1.5,   // 50% price increase for large
  };
  const [selectedSize, setSelectedSize] = useState('small');
  const [selectedQuantity, setSelectedQuantity] = useState(1);
  // Calculate the total price based on the selected quantity
  const total = price * selectedQuantity * sizeMultipliers[selectedSize]; // Adjust price based on size

  const handleSizeChange = (size) => {
    setSelectedSize(size);
  };

  const handleQuantityChange = (e) => {
    setSelectedQuantity(parseInt(e.target.value));
  };

  return (
    <div className="container mx-auto mt-5">
      <div className="flex">
        <div className="w-1/2">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe31dodYbWaT2yqWGaqN0yhAvEgS6YJeqcWg&usqp=CAU" alt={title} className="w-full" />
        </div>
        <div className="w-1/2 ml-5">
          <h1 className="text-3xl font-semibold">Burger</h1>
          <p className="text-gray-500">tesy</p>
          <p className="text-green-600 text-lg font-semibold">
            RS, {price * sizeMultipliers[selectedSize]}
          </p>

          <div className="mt-4">
            <p className="mb-2">Select Size:</p>
            <div className="flex space-x-4">
              <button
                onClick={() => handleSizeChange('small')}
                className={`${selectedSize === 'small'
                  ? 'bg-green-500 text-white'
                  : 'bg-gray-300 text-gray-600'
                  } px-3 py-1 rounded-full`}
              >
                Small
              </button>
              <button
                onClick={() => handleSizeChange('medium')}
                className={`${selectedSize === 'medium'
                  ? 'bg-green-500 text-white'
                  : 'bg-gray-300 text-gray-600'
                  } px-3 py-1 rounded-full`}
              >
                Medium
              </button>
              <button
                onClick={() => handleSizeChange('large')}
                className={`${selectedSize === 'large'
                  ? 'bg-green-500 text-white'
                  : 'bg-gray-300 text-gray-600'
                  } px-3 py-1 rounded-full`}
              >
                Large
              </button>
            </div>
          </div>

          <div className="mt-4">
            <p className="mb-2">Select Quantity:</p>
            <input
              type="number"
              value={selectedQuantity}
              onChange={handleQuantityChange}
              min="1"
              className="w-16 h-10 text-center border rounded-md"
            />
          </div>
          {/* Display the total price */}
          <div className="mt-4">
            <p className="text-lg font-semibold">Total Price: RS, {total}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailedPage;
