import React, { useState } from "react";
import axios from "axios";

import { Link, useNavigate } from "react-router-dom";
import SignUpPageImg from "../assets/SignUpPageImg.jpeg";

const SignUpPage = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const [signUpData, setSignUpData] = useState({
    name: "",
    email: "",
    password: "",
    
  });
  const onChanges = (e) => {
    const { id, value } = e.target;
    setSignUpData((preData) => ({
      ...preData,
      [id]: value,
    }));
    console.log(e.target.value);
  };
  const onSubmitForms = async (e) => {
    e.preventDefault();
    const isFormValid = Object.values(signUpData).every(
      (value) => value.trim() !== ""
    );
    if (!isFormValid) {
      console.error("Please fill in all fields before submitting.");
    }
    debugger
    try {
      // Validate the form data here if needed

      // Send data to the backend using Axios
      const response = await axios.post(
        "https://localhost:2000/users/signup",
        signUpData
      );
      console.log("Form submitted successfully:", response.data);
      navigate("/signUp/signUpSuccess");
      // Optionally, reset the form after successful submission
      setSignUpData({
        name: "",
        email:"",
        passWord: "",
        
      });
    } catch (error) {
      console.error("Error submitting form data:", error);

      // Optionally, handle specific errors or display a user-friendly message
    }
  };

  return (
    <>
      <div className="">
        <div
          className="bg-cover bg-center bg-fixed rounded-lg bg-cover-full"
          style={{ backgroundImage: `url(${SignUpPageImg})` }}
        >
          <div className="h-screen flex justify-end mr-10  items-center m-[20px]">
            <div className="bg-white mx-4 p-8 rounded shadow-md mt-20 w-full md:w-2/3 lg:w-1/3">
              <h1 className="text-3xl font-bold mb-8 text-center mt-4">
                Registration
              </h1>
              <form onSubmit={onSubmitForms}>
                <div className="mb-4">
                  <label
                    className="block font-semibold text-gray-700 mb-2"
                    for="name"
                  >
                    Name
                  </label>
                  <input
                    className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="name"
                    type="text"
                    value={signUpData.Name}
                    onChange={onChanges}
                    placeholder="Enter your Name"
                    required
                  />
                </div>
                
                <div className="mb-4">
                  <label
                    className="block font-semibold text-gray-700 mb-2"
                    for="email"
                  >
                    Email
                  </label>
                  <input
                    className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="email"
                    type="text"
                    value={signUpData.Username}
                    onChange={onChanges}
                    required
                    placeholder="Enter your Username"
                  />
                </div>
                
                <div className="mb-4">
                  <label
                    className="block font-semibold text-gray-700 mb-2"
                    for="password"
                  >
                    Password
                  </label>
                  <input
                    className="border rounded w-full py-2 px-3 text-gray-700  leading-tight focus:outline-none focus:shadow-outline"
                    id="password"
                    required
                    type={showPassword ? "text" : "password"}
                    onChange={onChanges}
                    minLength={10}
                    value={signUpData.password}
                    placeholder="Enter your password"
                  />
                </div>
                <label>
                  <input
                    type="checkbox"
                    checked={showPassword}
                    onChange={handleTogglePassword}
                  />{" "}
                  Show Password
                </label>
                <div>
                  <p className="text-gray-600 mt-2 hover:text-gray-800">
                    Already have Account{" "}
                    <Link to="/signIn" className="text-blue-700 underline">
                      SignIn
                    </Link>
                  </p>
                </div>
                <div className="mb-6">
                  <button
                    className="bg-blue-500 mt-2 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit"
                  >
                    Sign Up
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUpPage;
