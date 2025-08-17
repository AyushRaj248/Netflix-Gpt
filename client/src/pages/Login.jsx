import { useState, useRef } from "react";
import Header from "../components/others/Header.jsx";
import handleSubmit from "../utils/login/handleSubmit.js";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/user.slice.js";
import bgImage from "../utils/footer-bg.jpg";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [isSignInForm, setIsSignInForm] = useState(false);
  const [error, setError] = useState({});

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
    setError({});
  };

  const handleFormSubmit = async () => {
    try {
      const { errObj, user } = await handleSubmit(
        isSignInForm,
        email,
        password,
        name
      );
      if (errObj) {
        return setError(errObj);
      }

      dispatch(addUser(user));
      localStorage.setItem("user", JSON.stringify(user));
      navigate("/browse");
      
    } catch (error) {
      console.error("Form submission error:", error);
      setError({ general: "An unexpected error occurred. Please try again." });
    }
  };

  return (
    <div className="relative min-h-screen bg-gray-900">
      <Header className="fixed top-0 left-0 w-full z-20" />

      <div className="w-full h-screen relative">
        <img
          className="w-full h-full object-cover"
          src={bgImage}
          alt="Background"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-md p-6 sm:p-8 bg-black/90 rounded-lg text-white shadow-lg md:max-w-lg lg:max-w-xl z-10"
      >
        <h1 className="text-2xl sm:text-3xl font-bold mb-6">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>

        {error?.general && (
          <p className="text-blue-500 text-sm mb-4 bg-blue-100/20 p-2 rounded">
            {error.general}
          </p>
        )}

        {!isSignInForm && (
          <div className="mb-4">
            <input
              ref={name}
              type="text"
              placeholder="Full Name"
              className="w-full p-3 bg-gray-800 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600 transition"
              autoComplete="name"
            />
            {error?.name && (
              <p className="text-blue-500 text-sm mt-1 italic">{error.name}</p>
            )}
          </div>
        )}

        <div className="mb-4">
          <input
            ref={email}
            type="email"
            placeholder="Email Address"
            className="w-full p-3 bg-gray-800 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600 transition"
            autoComplete="email"
          />
          {error?.email && (
            <p className="text-blue-500 text-sm mt-1 italic">{error.email}</p>
          )}
        </div>

        <div className="mb-6">
          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="w-full p-3 bg-gray-800 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600 transition"
            autoComplete={isSignInForm ? "current-password" : "new-password"}
          />
          {error?.password && (
            <p className="text-blue-500 text-sm mt-1 italic">
              {error.password}
            </p>
          )}
        </div>

        <button
          type="button"
          onClick={handleFormSubmit}
          className="w-full p-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md transition duration-200"
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>

        <p
          className="mt-4 text-gray-400 cursor-pointer hover:text-blue-400 transition"
          onClick={toggleSignInForm}
        >
          {isSignInForm
            ? "New to CMDB ? Sign Up Now"
            : "Already registered? Sign In Now."}
        </p>
      </form>
    </div>
  );
};

export default Login;
