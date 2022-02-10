import React, { useState } from "react";
import Movie from "./Movie";
import moviesData from "./moviesData";

const MovieList = () => {
  const [moviesState, setMoviesState] = useState(moviesData);

  const updateMovies = (id, updatedMovieObj) => {
    return moviesState.map((item, index) => {
      if (item.id !== id) {
        // This isn't the item we care about - keep it as-is
        return item;
      }
      // Otherwise, this is the one we want - return an updated value
      const updatedMoviesState = [
        ...moviesState.slice(0, index),
        updatedMovieObj,
        ...moviesState.slice(index + 1)
      ];
      return setMoviesState(updatedMoviesState);
    });
  };

  const like = id => {
    const movieObj = moviesState.find(x => x.id === id);
    const updatedMovieObj = {
      id: movieObj.id,
      title: movieObj.title,
      category: movieObj.category,
      likes: movieObj.likes + 1,
      dislikes: movieObj.dislikes
    };
    updateMovies(id, updatedMovieObj);
  };

  const dislike = id => {
    const movieObj = moviesState.find(x => x.id === id);
    const updatedMovieObj = {
      id: movieObj.id,
      title: movieObj.title,
      category: movieObj.category,
      likes: movieObj.likes,
      dislikes: movieObj.dislikes + 1
    };
    updateMovies(id, updatedMovieObj);
  };

  return (
    <div className="movielist">
      {moviesState.map(data => (
        <Movie data={data} like={like} dislike={dislike} />
      ))}
    </div>
  );
};

export default MovieList;
