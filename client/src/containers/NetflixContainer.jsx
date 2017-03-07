var React = require('react');
var FilmSelector = require('../components/FilmSelector');
var FilmDetails = require('../components/FilmDetails');
var ActorSelector = require('../components/ActorSelector');

var NetflixContainer = React.createClass({
  componentDidMount: function() {
    this.getFilms();
  },

  getFilms: function(first, last){
    var first = first || this.state.actorFirst;
    var last = last || this.state.actorLast;
    var url = "http://netflixroulette.net/api/api.php?actor="+first+"%20"+last;
    var request = new XMLHttpRequest();
    request.open('get', url);

    request.onload = function(){
      if (request.status !== 200) return;
      var data = JSON.parse(request.responseText);
      this.setState({films: data, selectedFilm: data[0]});
    }.bind(this);

    request.send();
  },
  getInitialState: function () {
    return {films: [], selectedFilm: undefined, actorFirst: "Nicolas", actorLast: "Cage" };
  },
  render: function () {
    return (
      <div>
       <h1>netflixy</h1>
       <ActorSelector didSelectActor={this.didSelectActor}/>
       <FilmSelector films={this.state.films} didSelectFilm={this.didSelectFilm}/>
       <FilmDetails film={this.state.selectedFilm} />
      </div>
    );
  },

  didSelectFilm: function(film){
    this.setState({selectedFilm: film})
  }, 

  didSelectActor: function(first, last) {

    this.setState({actorFirst: first, actorLast: last})
    this.getFilms(first, last);
  }

});

module.exports = NetflixContainer;
