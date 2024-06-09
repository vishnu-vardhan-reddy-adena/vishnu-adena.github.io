import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../../redux/features/CartSlice";
//import CartItem from "./CartItem";

const CheckoutPage = () => {
  const automobiles = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="flex justify-center items-start p-8">
      {/* Items in Cart */}
      <div className="w-1/2 pr-8">
        <h2 className="text-2xl font-bold mb-4">Items in Cart</h2>
        {automobiles.map(
          (automobile) =>
            ""
            // <CartItem key={automobile.Car_id} {...automobile} />
        )}
        {automobiles.length > 0 && (
          <button
            className="mt-4 p-2 bg-red-600 text-white rounded"
            onClick={handleClearCart}
          >
            Clear Cart
          </button>
        )}
      </div>

      {/* Payment Details Form */}
      <div className="w-1/2 pl-8">
        <h2 className="text-2xl font-bold mb-4">Payment Details</h2>
        {/* Your payment form components go here */}
        <form>
          {/* Example form fields (replace with your actual payment form fields) */}
          <div className="mb-4">
            <label
              htmlFor="cardNumber"
              className="block text-sm font-medium text-gray-700"
            >
              Card Number
            </label>
            <input
              type="text"
              id="cardNumber"
              name="cardNumber"
              className="mt-1 p-2 border border-gray-300 rounded-md"
            />
          </div>

          {/* Add more form fields as needed */}

          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-700"
          >
            Place Order
          </button>
        </form>
      </div>
    </div>
  );
};

export default CheckoutPage;
