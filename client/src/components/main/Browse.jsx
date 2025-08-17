import Header from "../others/Header";
import useNowPlayingMovies from "../../hooks/useNowPlayingMovies";
import VideoContainer from "./VideoContainer";
import Movies from "./movies/Movies";
import { useSelector } from "react-redux";
import Gpt from "../../pages/gpt/Gpt";

const Browse = () => {
  useNowPlayingMovies();
  const showGptPage = useSelector((store) => store.gpt.showGptPage);

  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      <Header />
      {showGptPage ? (
        <Gpt />
      ) : (
        <div>
          <div className="w-full h-[85vh]">
            <VideoContainer />
          </div>
          <Movies />
        </div>
      )}
    </div>
  );
};

export default Browse;
