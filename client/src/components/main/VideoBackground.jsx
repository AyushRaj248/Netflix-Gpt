import { useSelector } from "react-redux";
import useMovieTrailer from "../../hooks/useMovieTrailer";

const VideoBackground = ({ id }) => {
  const movieTrailer = useSelector((store) => store.movies.movieTrailer);

  useMovieTrailer(id);

  return (
    <div className=" w-screen">
      {movieTrailer?.key ? (
        <iframe
          src={`https://www.youtube.com/embed/${movieTrailer.key}?autoplay=1&mute=1&controls=0&loop=1`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen={false}
          className="w-screen h-[85vh] "
        />
      ) :
       ( 
      <div className="absolute w-full h-full flex justify-center items-center bg-blue-950">
        <div className="text-white border-[1px] px-2 py-1 rounded-xl bg-gray-400 text-xl">No preview available</div>
      </div>
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
    </div>
  );
};

export default VideoBackground;
