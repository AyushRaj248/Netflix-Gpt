import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../redux/movies.slice";
import axiosClient from "../api/axiosClient";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getMovies = async () => {
      const data = await axiosClient.get("/movie/now_playing", {
        params: {
          page: 1,
        },
      });
      
      dispatch(addNowPlayingMovies(data.results));
    };
    getMovies();
  }, []);
};

export default useNowPlayingMovies;
