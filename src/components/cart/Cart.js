import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { removeItem, clearCart } from "../../redux/features/CartSlice";

const CarTable = () => {
  const automobiles = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  // console.log(automobiles);
  const pricePerDay = automobiles.reduce(
    (acc, product) => acc + parseFloat(product.Price),
    0
  );
  const [pickupDate, setPickupDate] = useState("");
  const [dropoffDate, setDropoffDate] = useState("");

  const [numberOfDays, setNumberOfDays] = useState(0);
  const [totalCost, setTotalCost] = useState(0);
  const handleRemoveItem = (automobile) => {
    dispatch(removeItem({ id: automobile.Car_id, ...automobile }));
  };

  const updateDatesAndCalculateTotal = (pickup, dropoff) => {
    // Check if both dates are valid
    if (
      isNaN(pickup.getTime()) ||
      isNaN(dropoff.getTime()) ||
      pickup >= dropoff
    ) {
      alert("Invalid date range. Please check your dates.");
      return;
    }

    const oneDay = 24 * 60 * 60 * 1000; // hours * minutes * seconds * milliseconds
    const days = Math.round(Math.abs((dropoff - pickup) / oneDay));

    setNumberOfDays(days);
    setTotalCost(days * pricePerDay);
    console.log(totalCost); // You can set totalCost in state if needed
  };

  const handlePickupDateChange = (e) => {
    const newPickupDate = new Date(e.target.value);
    setPickupDate(e.target.value);
    updateDatesAndCalculateTotal(newPickupDate, new Date(dropoffDate));
  };

  const handleDropoffDateChange = (e) => {
    const newDropoffDate = new Date(e.target.value);
    setDropoffDate(e.target.value);
    updateDatesAndCalculateTotal(new Date(pickupDate), newDropoffDate);
  };

  return automobiles?.length === 0 ? (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-slate-100 text-black p-8 rounded shadow-xl">
        <p className="text-2xl font-bold m-10">
          You have not added any Automobiles to Book
        </p>
        <p className="text-2xl  m-10">
          Now you can{" "}
          <Link
            to="/"
            className="text-2xl p-2 rounded-xl bg-blue-500 text-white "
          >
            Home
          </Link>{" "}
          to Book
        </p>
      </div>
    </div>
  ) : (
    <>
      <div className="flex justify-center items-start p-8">
        {/* Items in Cart */}
        <div className="w-1/2 pr-8">
          <table className="table-auto w-full">
            <tbody>
              {automobiles.map((car, index) => (
                <tr key={index}>
                  {console.log(car.CarId)}
                  <td className="py-3 pl-8">
                    <img
                      className="w-[250px] rounded-xl "
                      alt="img"
                      src={ car.image}
                    />
                  </td>
                  <td className="p-2">
                    <ul>
                      <li className="font-bold text-2xl">
                        {car.Brand + " "}
                        {"" + car.Model}
                      </li>
                      <li>{car.SeatCapacity + " Seater"}</li>
                      <li className="font-bold text-lg">
                        {"₹ " + car.Price + "/Day"}
                      </li>
                    </ul>
                  </td>
                  <td className="p-2">
                    <button
                      className="text-xl bg-red-400 rounded-lg"
                      onclick={handleRemoveItem(car)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="35"
                        height="30"
                        fill="currentColor"
                        className="bi bi-trash3"
                        viewBox="0 0 16 16"
                      >
                        <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z" />
                      </svg>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="w-1/2 pl-8 justify-center">
          <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-md shadow-md">
            <h2 className="text-2xl font-bold mb-4">Check Out</h2>

            <label className="block text-gray-700 text-sm font-bold mb-2">
              Pick-up Date:
            </label>
            <input
              type="date"
              value={pickupDate}
              onChange={handlePickupDateChange}
              className="block w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"
            />

            <label className="block mt-4 text-gray-700 text-sm font-bold mb-2">
              Drop-off Date:
            </label>
            <input
              type="date"
              value={dropoffDate}
              onChange={handleDropoffDateChange}
              className="block w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"
            />

            <p className="mt-4">Number of Days: {numberOfDays}</p>
            {/* Total Cost can be displayed here without tracking it in state */}

            <h3 className="text-2xl font-extrabold m-3">
              Total Price : {"₹  " + totalCost}
            </h3>
            <button
              type="submit"
              className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-700"
            >
              Conform Booking
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
const Cart = () => {
  return (
    <div>
      <h2 className="text-4xl font-bold p-4 mb-4">Added to Book</h2>
      <CarTable />
    </div>
  );
};

export default Cart;
