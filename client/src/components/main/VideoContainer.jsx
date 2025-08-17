import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const VideoContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (!movies) return;
  const RandomNum = Math.ceil(Math.random() * 20);
  const mainmovie = movies[RandomNum];
  const { title, overview, id } = mainmovie;

  return (
    <div className="w-full h-full relative ">
      <VideoTitle title={title} overview={overview} id={id} />
      <VideoBackground id={id} />
    </div>
  );
};

export default VideoContainer;
