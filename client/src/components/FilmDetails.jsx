var React = require('react');
// var CastList = require('./CastList');


var FilmDetails = function(props){
  if (!props.film){
    return <h4>No film selected</h4>
  }
  return <div id="filmDetails">
          <h4>Rating: {props.film.rating}</h4>
          <h4>Category: {props.film.category}</h4>
          <h4>Release year: {props.film.release_year}</h4>
          <h4>Cast: {props.film.show_cast}</h4>
          <h4>Summary: {props.film.summary}</h4>
          <h4>Run time: {props.film.runtime}</h4>
          </div>
};

module.exports = FilmDetails;