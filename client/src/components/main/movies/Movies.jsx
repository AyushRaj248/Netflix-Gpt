import React from "react";
import MovieList from "./MovieList";

const Movies = () => {
  const List = [

    {
      Name: "top_rated",
      type:"movie"

    },

    {
      Name: "upcoming",
      type:"movie"

    },
    {
      Name: "top_rated",
      type:"movie"

    },
    {
      Name: "popular",
      type:"movie"

    },
    {
      Name: "airing_today",
      type:"tv"

    },
    {
      Name: "on_the_air",
      type:"tv"

    },
    {
      Name: "popular",
      type:"tv"

    },
    {
      Name: "top_rated",
      type:"tv"

    },
  ];
  return (
    <div className="p-6 bg-gray-950 ">
      {List.map((el,idx) => (
        <MovieList title={el.Name} type={el.type} key={idx} />
      ))}
    </div>
  );
};

export default Movies;
