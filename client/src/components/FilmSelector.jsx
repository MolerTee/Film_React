var React = require('react');

var FilmSelector = React.createClass({

  getInitialState: function() {
    return { currentIndex: undefined };
  },

  render: function (props) {
    var options = this.props.films.map(function(film, index){
      return <option value={index} key={index}>{film.show_title}</option>
    });
    return (
      <select id="films" value={this.state.currentIndex} onChange={this.handleChange}>
      {options}
      </select>
      );
  },

  handleChange: function(event) {
    var newIndex = event.target.value;

    var selectedFilm = this.props.films[newIndex];
    this.props.didSelectFilm(selectedFilm);
  }
});


module.exports = FilmSelector;