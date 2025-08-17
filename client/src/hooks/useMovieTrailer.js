import { useDispatch } from "react-redux";
import { addMovieTrailer } from "../redux/movies.slice";
import { useEffect } from "react";
import axiosClient from "../api/axiosClient";

const useMovieTrailer = (id) => {
  const dispatch = useDispatch();

  const FetchMovieVideo = async () => {
    const data = await axiosClient(`/movie/${id}/videos`);
    const filterdata = data?.results?.filter((el) => {
      return el?.type === "Trailer";
    });

    const trailer = filterdata.length ? filterdata[0] : data.results[0];
    dispatch(addMovieTrailer(trailer));
  };

  useEffect(() => {
    FetchMovieVideo();
  }, []);
};

export default useMovieTrailer;
