import { Link } from "react-router-dom";
import React, { useRef, useState } from "react";
import {
  addFavouriteMovie,
  removeFavouriteMovie,
} from "../../../redux/wishlist.slice";
import { useDispatch, useSelector } from "react-redux";

const MovieCard = ({ show, type }) => {
  const dispatch = useDispatch();
  const wishlistItems = useSelector((store) => store.wishList);
  const isInWishlist = wishlistItems.find((el) => el.id === show.id);

  const imageUrl = show.poster_path
    ? `https://image.tmdb.org/t/p/w500${show.poster_path}`
    : "https://via.placeholder.com/300x450?text=No+Image";


    const handleWishlistClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (isInWishlist) {
      dispatch(removeFavouriteMovie(show.id));
    } else {
      dispatch(addFavouriteMovie({ ...show, type }));
    }
  };

  return (
    <Link
      to={`/browse/${type}/${show?.id}`}
      aria-label={`View details for ${show.title || show.name}`}
      onClick={() => scrollTo(0, 0)}
    >
      <div className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl bg-gray-900">
        {/* Simple Wishlist Button */}
        <button
          onClick={handleWishlistClick}
          className={`absolute top-2 right-2 z-10 p-2 rounded-full transition-colors duration-200 ${
            isInWishlist
              ? "bg-red-500 text-white"
              : "bg-black/60 text-white hover:bg-black/80"
          } opacity-100`}
          aria-label={isInWishlist ? "Remove from wishlist" : "Add to wishlist"}
        >
          <svg
            className={`w-5 h-5 ${
              isInWishlist ? "fill-current" : "fill-none stroke-current"
            }`}
            viewBox="0 0 24 24"
            strokeWidth={2}
          >
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
        </button>

        {/* Movie Poster */}
        <img
          src={imageUrl}
          alt={show.title || show.name || "Show Poster"}
          className="w-full h-full object-cover rounded-lg"
          style={{ aspectRatio: "2/3" }}
        />

        {/* Simple Add to Wishlist Button */}
        <button
          onClick={handleWishlistClick}
          className={`absolute bottom-4 left-4 right-4 py-2 px-4 rounded-lg text-sm font-medium transition-all duration-200 ${
            isInWishlist
              ? "bg-red-500 text-white hover:bg-red-600"
              : "bg-white text-black hover:bg-gray-100"
          } opacity-100`}
        >
          {isInWishlist ? "Remove from Wishlist" : "Add to Wishlist"}
        </button>
      </div>
    </Link>
  );
};

export default MovieCard;
