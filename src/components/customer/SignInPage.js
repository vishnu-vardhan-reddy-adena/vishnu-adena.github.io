import React, { useContext, useState } from "react";
import SignInPageImg from "../assets/SignInPageImg.jpeg";
import axios from "axios";
import { useNavigate } from "react-router";
import { AuthContext } from "../../utils/AuthContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignInPage = () => {
  const navigate = useNavigate();
  const { setIsLoggedIn, setusername } = useContext(AuthContext);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const validateForm = () => {
    let valid = true;

    if (!username) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        userName: "Name is required",
      }));
      valid = false;
    }

    if (!password) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: "Password is required",
      }));
      valid = false;
    }

    return valid;
  };

  const submitActionHandler = (event) => {
    debugger
    event.preventDefault();
    if (validateForm()) {
      try {
        axios
          .post("https://localhost:2000/users/login", {
            email: username,
            password: password,
          })
          .then((response) => {
            const { token, message } = response.data;
            localStorage.setItem("token", token);
            localStorage.setItem("login",message)
            // alert('token stored');
            // console.log(Token);
            // console.log(Role);
            setIsLoggedIn(true);
            setusername({ username });

            if (message  === "Admin") {
              navigate("/adminPage");
            } else {
              navigate("/");
            }
          });
      } catch (error) {
        alert("error===" + error);
        toast.error("Login failed. Please check your credentials.");
      }
    }
  };

  return (
    <>
      <div>
        <ToastContainer />
        <section className="flex flex-col md:flex-row h-screen items-center">
          <div className="bg-indigo-600 hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen">
            <img
              src={SignInPageImg}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>

          <div
            className="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto  md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12
        flex items-center justify-center"
          >
            <div className="w-full h-100">
              <h1 className="text-xl md:text-2xl font-bold leading-tight mt-12">
                Log in to your account
              </h1>

              <form className="mt-6" action="#" method="POST">
                <div>
                  <label className="block text-gray-700">Email</label>
                  <input
                    type="email"
                    name=""
                    id=""
                    placeholder="Enter UserName"
                    className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                    autofocus
                    autocomplete
                    required
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>

                <div className="mt-4">
                  <label className="block text-gray-700">Password</label>
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter Password"
                    //minlength="8"
                    className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
                focus:bg-white focus:outline-none"
                    required
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
                {/*{<div className="text-right mt-2">
                  <a
                    href="/"
                    className="text-sm font-semibold text-gray-700 hover:text-blue-700 focus:text-blue-700"
                  >
                    Forgot Password?
                  </a></div>}*/}

                <button
                  type="button"
                  onClick={submitActionHandler}
                  //type="submit"
                  className="w-full block bg-indigo-500 hover:bg-indigo-400 focus:bg-indigo-400 text-white font-semibold rounded-lg px-4 py-3 mt-6"
                >
                  Log In
                </button>
              </form>
              <p className="mt-8">
                Need an account?{" "}
                <a
                  href="/signUp"
                  className="text-blue-500 hover:text-blue-700 font-semibold"
                >
                  Create an account
                </a>
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
export default SignInPage;
