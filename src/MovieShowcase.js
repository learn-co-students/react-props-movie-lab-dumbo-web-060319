import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js';
import movieData from './data.js';

export default class MovieShowcase extends Component {
  generateMovieCards = () => {
    // map over your movieData array and return the correct
    return movieData.map((movie, i) => {
      return (
        <MovieCard
          key={i}
          data={movie}
          poster={movie.poster}
          title={movie.title}
          IMDBRating={movie.IMDBRating}
          genres={movie.genres}
        />
      );
    });
  };

  render() {
    return <div id="movie-showcase">{this.generateMovieCards()}</div>;
  }
}
