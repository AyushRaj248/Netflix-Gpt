import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import axiosClient from "../../../api/axiosClient";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { useNavigate } from "react-router-dom";

const MovieList = ({ title, type }) => {
  const navigate = useNavigate();
  const [arrayOfMoviesCategory, setArrayOfMoviesCategory] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovieListData = async () => {
      try {
        setLoading(true);
        const response = await axiosClient.get(`/${type}/${title}`);
        setArrayOfMoviesCategory(response.results);
      } catch (error) {
        console.error("Error fetching movie list:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchMovieListData();
  }, [title, type]);

  const handleClick = () => {
    navigate(`/browse/listofCategory/${type}/${title}`);
    scrollTo(0,0)
  };

  return (
    <div className="bg-gray-900 py-6 px-4 sm:px-6 rounded-lg text-white my-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold capitalize">
          {title.replace(/_/g, " ")}
        </h2>
        <button
          onClick={handleClick}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 cursor-pointer rounded-md text-sm sm:text-base font-medium transition-colors duration-200"
        >
          View All
        </button>
      </div>

      {loading ? (
        <div className="flex justify-center items-center h-48">
          <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-600"></div>
        </div>
      ) : arrayOfMoviesCategory?.length > 0 ? (
        <div className="relative">
          <Swiper
            modules={[Navigation]}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            spaceBetween={10}
            slidesPerView={2}
            breakpoints={{
              320: { slidesPerView: 2, spaceBetween: 8 },
              640: { slidesPerView: 3, spaceBetween: 10 },
              1024: { slidesPerView: 5, spaceBetween: 12 },
              1280: { slidesPerView: 6, spaceBetween: 14 },
            }}
            className="px-4 sm:px-6"
          >
            {arrayOfMoviesCategory.map((show) => (
              <SwiperSlide key={show.id}>
                <MovieCard show={show} type={type} />
              </SwiperSlide>
            ))}
            <div
              className="swiper-button-prev font-extrabold"
              aria-label="Previous slide"
            ></div>
            <div
              className="swiper-button-next font-extrabold "
              aria-label="Next slide"
            ></div>
          </Swiper>
        </div>
      ) : (
        <p className="text-center text-gray-300 text-base sm:text-lg py-8">
          No movies found for this category.
        </p>
      )}
    </div>
  );
};

export default MovieList;


