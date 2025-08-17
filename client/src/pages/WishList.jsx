import React from "react";
import { useSelector, useDispatch } from "react-redux";
import MovieCard from "../components/main/movies/MovieCard";
import { removeFavouriteMovie, clearAll } from "../redux/wishlist.slice";
import Header from "../components/others/Header";

const WishList = () => {
  const dispatch = useDispatch();

  const wishlistItems = useSelector((store) => store.wishList);

  const handleClearAll = () => {
    dispatch(clearAll());
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-indigo-900">
      <Header />

      <div className="container mx-auto px-4 py-12 text-white">
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-12">
          <div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 mb-2">
              My Watchlist
            </h1>
            <p className="text-gray-300 text-lg">
              {wishlistItems.length}{" "}
              {wishlistItems.length === 1 ? "item" : "items"} saved
            </p>
          </div>

          {wishlistItems.length > 0 && (
            <button
              onClick={handleClearAll}
              className="group px-6 py-3 bg-red-600 hover:bg-red-700 rounded-lg transition-all duration-300 text-white font-medium shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center gap-2"
            >
              <svg
                className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                />
              </svg>
              Clear All
            </button>
          )}
        </div>

        {/* Content Section */}
        {wishlistItems.length > 0 ? (
          <div>
            {/* Stats Bar */}
            <div className="mb-8 p-4 bg-gray-800/50 rounded-xl backdrop-blur-sm border border-gray-700">
              <div className="flex flex-wrap gap-6 text-sm text-gray-300">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span>
                    Movies:{" "}
                    {
                      wishlistItems.filter((item) => item.type === "movie")
                        .length
                    }
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                  <span>
                    TV Shows:{" "}
                    {wishlistItems.filter((item) => item.type === "tv").length}{" "}
                  </span>
                </div>
              </div>
            </div>

            {/* Movies Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
              {wishlistItems?.map((el, index) => (
                <div
                  key={el.id || index}
                  className="animate-fadeInUp"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <MovieCard show={el} type={el.type} id={index} />
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <div className="mb-8 p-8 bg-gray-800/30 rounded-full">
              <svg
                className="w-24 h-24 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </div>

            <h2 className="text-3xl font-bold text-gray-300 mb-4">
              Your Watchlist is Empty
            </h2>

            <p className="text-gray-400 text-lg mb-8 max-w-md">
              Start building your personal collection by adding movies and TV
              shows you want to watch later.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => window.history.back()}
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-lg transition-all duration-300 text-white font-medium shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Browse Movies
              </button>

              <button
                onClick={() => window.history.back()}
                className="px-8 py-3 bg-gray-700 hover:bg-gray-600 rounded-lg transition-all duration-300 text-white font-medium shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Browse TV Shows
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default WishList;
