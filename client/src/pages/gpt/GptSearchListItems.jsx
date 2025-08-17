import axios from "axios";
import React, { useEffect, useState } from "react";
import MovieCard from "../../components/main/movies/MovieCard";
import { useSelector } from "react-redux";

const GptSearchListItems = () => {
  const [moviesData, setMoviesData] = useState([]);

  const showsList = useSelector(store=>store.gpt.searchShows)
  console.log(showsList);
  

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        // Use Promise.all to fetch all movies concurrently
        const promises = showsList.map((el) =>
          axios.get("https://api.themoviedb.org/3/search/multi", {
            params: { query: el.movieName },
            headers: {
              accept: "application/json",
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNzhhNjc0ZTU0N2UxMDc2ODlkN2RjNTdkYTY0YzcxMiIsIm5iZiI6MTc0Njc3NDIxMC43NTUsInN1YiI6IjY4MWRhOGMyM2EyNzVkNjRkMTBiMmJlNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qHl0qZkd7PhssK45IvGr3tNBPChEnaYefd0AWhoBDwQ",
            },
          })
        );

        // Wait for all API calls to complete
        const responses = await Promise.all(promises);

        // Combine results from all responses
        const allMovies = responses.flatMap((response) => response.data.results);
        setMoviesData(allMovies);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, [showsList]); // Empty dependency array to run once on mount

  return (
    <div className="w-full bg-gray-900 text-white px-4 py-6 sm:py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 max-w-7xl mx-auto">
        {moviesData?.map((el,idx) => (
          <MovieCard key={idx} show={el} type={el.media_type} />
        ))}
      </div>
    </div>
  );
};

export default GptSearchListItems;