import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import axiosClient from "../../../api/axiosClient";
import MovieCard from "../movies/MovieCard";

const ListOfShowOfCategory = () => {
  const [loading, setLoading] = useState(false);
  const [shows, setShows] = useState([]);
  const [page, setPage] = useState(1);
  const { type, category } = useParams();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  useEffect(() => {
    const fetchShows = async () => {
      setLoading(true);
      try {
        const data = await axiosClient.get(
          `/listOfShowCategory/${type}/${category}`,
          {
            params: { page },
          }
        );
        setShows((prevShows) => [...prevShows, ...data.results]);
      } catch (err) {
        console.error("Error fetching shows:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchShows();
  }, [type, category, page]);

  const handleLoadMore = () => {
    setPage((prev) => prev + 1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-indigo-900 text-white py-12 px-4 sm:px-6 lg:px-12 xl:px-16">
      <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-extrabold text-center uppercase mb-12 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
        {category.replace(/_/g, " ")}
      </h1>
      {shows.length === 0 && !loading ? (
        <p className="text-center text-gray-200 text-lg sm:text-xl md:text-2xl font-medium">
          No shows found for this category.
        </p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 gap-6 sm:gap-6 lg:gap-8">
          {shows.map((show, index) => (
            <div key={show.id} className="relative">
              <MovieCard show={show} type={type} />
            </div>
          ))}
        </div>
      )}
      {loading && (
        <div className="flex justify-center items-center m-12 mt-20">
          <div className="relative">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-cyan-500 border-opacity-80"></div>
            <div className="absolute inset-0 rounded-full animate-pulse bg-cyan-500/20"></div>
          </div>
        </div>
      )}
      {!loading && shows.length > 0 && (
        <div className="text-center mt-12 mb-12">
          <button
            onClick={handleLoadMore}
            className="relative bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-700 hover:to-purple-700 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 ease-in-out transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-cyan-500/50 shadow-lg hover:shadow-cyan-500/50 backdrop-blur-sm bg-opacity-80"
          >
            <span className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 opacity-0 hover:opacity-40 transition-opacity duration-300"></span>
            <span className="relative z-10">Load More</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default ListOfShowOfCategory;
