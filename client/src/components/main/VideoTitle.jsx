import { FaPlay } from "react-icons/fa";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { Link } from "react-router-dom";


const VideoTitle = ({ title, overview,id }) => {
  console.log(id);
  
  return (
    <div className="absolute z-20  left-4 sm:left-8 top-[70%] sm:top-[35%] md:top-[35%] w-full max-w-[90%] sm:max-w-[60%] md:max-w-[50%] text-white flex flex-col gap-2 sm:gap-4 p-4 sm:p-6 ">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold truncate">{title}</h1>
      <p className="text-sm sm:text-base md:text-lg line-clamp-3">{overview}</p>
      <div className="flex gap-2 sm:gap-4">
        <Link to={`/browse/movie/${id}`}>
        <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md transition">
          <FaPlay /> Play
        </button>
        </Link>
        <Link to={`/browse/movie/${id}`}>
        <button className="flex items-center gap-2 px-4 py-2 bg-transparent hover:bg-gray-700 text-white font-semibold rounded-md transition">
          <AiOutlineInfoCircle /> More Info
        </button>
        </Link>
      </div>
    </div>
  );
};

export default VideoTitle;