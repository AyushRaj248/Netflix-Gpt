import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Logout from "../others/Logout";
import { changeGptPageVisibilty } from "../../redux/gpt.slice";

const Header = () => {
  const isGptSearchOpen = useSelector((store) => store.gpt.showGptPage);
  const dispatch = useDispatch();
  const isLoggedInUser = useSelector((store) => store.appConfig.isLoggedIn);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = [
    { name: "Movies", to: "/browse/listofCategory/movie/popular" },
    { name: "TV Shows", to: "/browse/listofCategory/tv/popular" },
    { name: "WishList", to: "/wishlist" },
  ];

  return (
    <nav className="w-full fixed top-0 left-0 bg-gradient-to-b from-gray-900/70 to-blue-950/20 z-50 flex justify-between items-center px-3 sm:px-5 md:px-7 lg:px-9 py-2 sm:py-3 shadow-lg backdrop-blur-md">
      {/* Logo */}
      <div>
        <Link to="/">
          <h1 className="w-20 sm:w-24 md:w-32 lg:w-36 text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-white to-blue-600 tracking-tight">
            CMDB
          </h1>
        </Link>
      </div>

      { (
        <div className="flex items-center gap-2 sm:gap-4 md:gap-5 lg:gap-6">
          {/* Desktop/Tablet Navigation */}
          <nav className="hidden sm:flex items-center gap-3 md:gap-4 lg:gap-6 text-sm lg:text-base font-['Inter']">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                className="text-gray-100 hover:text-blue-500 transition-colors duration-200 font-medium"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* GptSearch and Logout */}
          <button
            onClick={() => dispatch(changeGptPageVisibilty())}
            className="text-gray-100 bg-blue-600/30 hover:bg-blue-600/50 border border-blue-500/50 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-lg transition-all duration-200 text-sm lg:text-base font-medium hover:shadow-md hover:scale-105 cursor-pointer"
          >
            {isGptSearchOpen ? "HomePage" : "GptSearch"}
          </button>

          {/* logout button */}
          {isLoggedInUser && <Logout />}

          {/* Hamburger Menu Button (Mobile) */}
          <button
            className="sm:hidden text-white text-xl focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? "✕" : "☰"}
          </button>
        </div>
      )}

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <nav className="sm:hidden absolute top-full left-0 w-full bg-gray-800/90 flex flex-col gap-2 p-5 text-white text-sm font-['Inter'] shadow-2xl animate-fade-in-down border-t border-gray-700/30">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              onClick={toggleMenu}
              className="hover:text-blue-500 transition-colors duration-200 py-1.5 font-medium"
            >
              {link.name}
            </Link>
          ))}
        </nav>
      )}
    </nav>
  );
};

export default Header;
