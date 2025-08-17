import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axiosClient from "../../../api/axiosClient";
import { addFavouriteMovie } from "../../../redux/wishlist.slice";
import { useDispatch } from "react-redux";

const Details = () => {
  const dispatch = useDispatch();
  const { movieId, type } = useParams();

  const [movieData, setMovieData] = useState({});
  const [trailer, setTrailer] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  useEffect(() => {
    const fetchMovieData = async () => {
      try {
        setIsLoading(true);
        const movieResponse = await axiosClient.get(
          `/singleShowDetails/${type}/${movieId}`
        );

        setMovieData(movieResponse);

        const trailerResponse = await axiosClient.get(
          `/${type}/${movieId}/videos`
        );

        const trailerVideo = trailerResponse.results?.find(
          (video) => video.type === "Trailer" && video.site === "YouTube"
        );
        console.log(trailerResponse);

        setTrailer(trailerVideo);

        // Preload backdrop image to prevent layout shift
        if (movieResponse?.backdrop_path) {
          const img = new Image();
          img.src = `https://image.tmdb.org/t/p/original/${movieResponse.backdrop_path}`;
          img.onload = () => setIsImageLoaded(true);
          img.onerror = () => setIsImageLoaded(true); // Handle image load failure
        } else {
          setIsImageLoaded(true);
        }
      } catch (error) {
        console.error("Error fetching movie data:", error);
        setIsImageLoaded(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovieData();
  }, [movieId, type]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [movieData]);

  const handleAddToWishList = () => {
    dispatch(addFavouriteMovie(movieData));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-800 text-white">
      {/* spinner */}

      {isLoading || !isImageLoaded ? (
        <div className="flex justify-center items-center h-screen">
          {/* <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-solid shadow-md"></div> */}
          <div className="relative">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-cyan-500 border-opacity-80"></div>
            <div className="absolute inset-0 rounded-full animate-pulse bg-cyan-500/20 "></div>
          </div>
        </div>
      ) : (
        <div className="container mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-10">
          {/* Movie Details Section */}

          <div
            style={{
              backgroundImage: movieData?.backdrop_path
                ? `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(https://image.tmdb.org/t/p/original/${movieData.backdrop_path})`
                : "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(/placeholder.jpg)",
              borderRadius: "1.5rem", // Explicitly set to ensure consistency
            }}
            className="relative bg-cover bg-center rounded-3xl shadow-2xl overflow-hidden  animate-slideUp"
          >
            <div className="flex flex-col md:flex-row gap-4 sm:gap-6 md:gap-8 p-4 sm:p-6 md:p-8 lg:p-10">
              <div className="w-full max-w-[200px] sm:max-w-[250px] md:max-w-[300px] md:w-1/3 lg:w-1/4 mx-auto md:mx-0 flex-shrink-0">
                <img
                  className="w-full rounded-2xl shadow-xl transform hover:scale-105 transition-transform duration-500 ease-out object-cover"
                  src={`https://image.tmdb.org/t/p/w500/${
                    movieData?.poster_path || "/placeholder.jpg"
                  }`}
                  alt={
                    movieData?.original_title ||
                    movieData?.name ||
                    "Movie Poster"
                  }
                  style={{ aspectRatio: "2/3" }}
                />
              </div>
              <div className="flex-1 space-y-4 sm:space-y-5 md:space-y-6">
                <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                  {movieData?.original_title || movieData?.name || "Untitled"}
                </h1>
                <div className="flex flex-wrap items-center gap-2 sm:gap-3 md:gap-4 text-xs sm:text-sm md:text-base">
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 rounded-full font-semibold">
                    {movieData?.release_date?.slice(0, 4) ||
                      movieData?.first_air_date?.slice(0, 4) ||
                      "N/A"}
                  </span>
                  <span className="text-gray-200 truncate max-w-[150px] sm:max-w-[200px] md:max-w-[300px]">
                    {movieData?.genres?.map((el) => el.name).join(", ") ||
                      "N/A"}
                  </span>
                  {movieData?.runtime && (
                    <span className="text-gray-200">
                      {Math.floor(movieData.runtime / 60)}h{" "}
                      {movieData.runtime % 60}m
                    </span>
                  )}
                </div>
                <p className="text-gray-100 text-sm sm:text-base md:text-lg leading-relaxed max-w-full sm:max-w-2xl md:max-w-3xl">
                  {movieData?.overview || "No overview available."}
                </p>

                {movieData?.vote_average && (
                  <div className="flex items-center gap-2 sm:gap-3">
                    <svg
                      className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="text-sm sm:text-base md:text-lg font-semibold">
                      {movieData.vote_average.toFixed(1)} / 10
                    </span>
                    <span className="text-gray-400 text-xs sm:text-sm">
                      ({movieData.vote_count || 0} votes)
                    </span>
                  </div>
                )}
                <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4">
                  <a
                    href={movieData?.homepage || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-4 sm:px-6 md:px-8 py-2 sm:py-2.5 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-[0_6px_15px_rgba(59,130,246,0.4)]"
                  >
                    Visit Website
                  </a>
                  <button
                    className="relative inline-block bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white font-semibold px-4 sm:px-6 md:px-8 py-2 sm:py-2.5 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-[0_6px_15px_rgba(219,39,119,0.4)] overflow-hidden cursor-pointer"
                    aria-label="Add to watchlist"
                    onClick={handleAddToWishList}
                  >
                    <span className="relative z-10 flex items-center gap-1 sm:gap-2">
                      <svg
                        className="w-4 h-4 sm:w-5 sm:h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 4v16m8-8H4"
                        />
                      </svg>
                      Add to Watchlist
                    </span>
                    <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Trailer Section */}
          <div className="mt-8 sm:mt-10 md:mt-12 animate-slideUp">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 mb-4 sm:mb-6 md:mb-8">
              Trailer
            </h2>
            {trailer ? (
              <div
                className="relative w-full max-w-[90vw] sm:max-w-3xl md:max-w-4xl lg:max-w-5xl mx-auto"
                style={{ paddingBottom: "56.25%" /* 16:9 Aspect Ratio */ }}
              >
                <iframe
                  className="absolute top-0 left-0 w-full h-full rounded-2xl shadow-xl transition-all duration-500 hover:shadow-[0_12px_30px_rgba(59,130,246,0.6)]"
                  src={`https://www.youtube.com/embed/${trailer.key}`}
                  title={`${
                    movieData?.original_title || movieData?.name
                  } Trailer`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            ) : (
              <div className="bg-gray-800 p-4 sm:p-6 md:p-8 rounded-2xl text-center shadow-lg transition-all duration-300 animate-slideUp">
                <p className="text-gray-300 text-sm sm:text-base md:text-lg font-medium">
                  No trailer available for this{" "}
                  {type === "movie" ? "movie" : "show"}.
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Details;
