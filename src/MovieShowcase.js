import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  generateMovieCards = () => {
    // map over your movieData array and return the correct 
    const allmovies = movieData.map((movie) => (
      <MovieCard
        title = {movie.title}
        IMDBRating = {movie.IMDBRating}
        genres = {movie.genres}
        poster = {movie.poster}
      />
    ))
    return allmovies
  }
  

  render() {
    //console.log(this.props)
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  }
}
