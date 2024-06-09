import React from "react";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export const Title = () => {
  return (
    <>
      <div>
        <div>
          <ul className="flex justify-center ml-2">
            <li>
              <Link to="/">
                <img
                  className="w-[100px] h-[70px] rounded-xl"
                  src={Logo}
                  alt="logo"
                />
              </Link>
            </li>
            <li>
              <Link to="/">
                <h1 className="text-2xl font-bold ml-2 mt-3  hover:text-violet-400 duration-200 cursor-pointer">
                  Huron Rentals
                </h1>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

const Header = () => {
  const CartItems = useSelector((store) => store.cart.items);
  console.log(CartItems);
  return (
    <>
      <div className="m-2 sticky top-2 ">
        <div className="pb-2 pl-4 rounded-xl header sticky  bg-white shadow-lg flex items-end justify-between px-8 py-02">
          <Title />

          <div>
            <nav className="nav font-semibold text-lg flex justify-end">
              <ul className="flex items-stretch">
                <li className="p-4 border-b-2 border-blue-500 border-opacity-0 hover:border-opacity-100 hover:text-blue-500 duration-200 cursor-pointer active">
                  <Link to="/">Home</Link>
                </li>

                <li className="p-4 border-b-2 border-blue-500 border-opacity-0 hover:border-opacity-100 hover:text-blue-500 duration-200 cursor-pointer">
                  <Link to="/">About Us</Link>
                </li>
                <li className="p-4 border-b-2 border-blue-500 border-opacity-0 hover:border-opacity-100 hover:text-blue-500 duration-200 cursor-pointer">
                  <Link to="/">Contact</Link>
                </li>
              </ul>
              <div className="relative px-4  flex justify-between items-center bg-white">
                <Link
                  className="block p-4 mb-2  mx-2 leading-loose text-lg text-center font-semibold  bg-gray-50 hover:bg-gray-300 rounded-xl"
                  to="/signIn"
                >
                  Sign In
                </Link>
                <Link
                  className="block p-4 mb-2 mx-2 leading-loose text-lg text-center text-white font-semibold bg-blue-600 hover:bg-blue-700  rounded-xl"
                  to="signUp"
                >
                  Sign Up
                </Link>
                <Link to="/cart">
                  <button
                    type="button"
                    className=" rounded-full overflow-hidden border-5 border-gray-500"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="50"
                      height="50"
                      fill="currentColor"
                      className="bi bi-cart w-15 h-15 object-cover rounded-full hover:bg-slate-300"
                      viewBox="0 0 16 16"
                      id="IconChangeColor"
                      transform="scale(-1, 1)"
                    >
                      {" "}
                      <path
                        d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
                        id="mainIconPathAttribute"
                      ></path>{" "}
                    </svg>
                    <div
                      style={{
                        color: "black",
                        width: "1.5rem",
                        height: "1.5rem",
                        position: "absolute",
                        bottom: 0,
                        right: 0,
                      }}
                    >
                      {CartItems.length}
                    </div>
                  </button>
                </Link>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};
export default Header;
