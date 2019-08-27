import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  generateMovieCards = () => {
    console.log(movieData);
    return movieData.map((item) => (
      <MovieCard
        title={item.title}
        genres={item.genres}
        poster={item.poster}
        IMDBRating={item.IMDBRating}
      />
    ))
  }

  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  }
}
