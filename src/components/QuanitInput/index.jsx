import { useState } from 'react';

const QuantityInput = () => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="flex items-center space-x-4">
      <button
        className="px-4 py-2 bg-gray-200 text-black font-semibold rounded-l-md focus:outline-none focus:ring-2 focus:ring-gray-300"
        onClick={handleDecrease}
      >
        -
      </button>
      <input
        type="text"
        value={quantity}
        readOnly
        className="w-12 text-center  px-4 py-2 border-t border-b border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300"
      />
      <button
        className="px-4 py-2  bg-gray-200 text-black font-semibold rounded-r-md focus:outline-none focus:ring-2 focus:ring-gray-300"
        onClick={handleIncrease}
      >
        +
      </button>
    </div>
  );
};

export default QuantityInput;
