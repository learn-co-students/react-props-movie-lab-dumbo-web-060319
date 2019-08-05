import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component 
{
  generateMovieCards = () => {
    // map over your movieData array and return the correct 
    let all = movieData.map((stuff) =>
      <MovieCard title = {stuff.title} IMDBRating = {stuff.IMDBRating} genres = {stuff.genres} poster = {stuff.poster}/>
    )
    return all;
  }

  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  }
}
