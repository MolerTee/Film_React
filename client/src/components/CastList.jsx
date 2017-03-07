var React = require('react');

var CastList = function(props) {

  var castNodes = props.cast.map(function(castMember) {
    return <p>{castMember}</p>
  });

  return (
    {castNodes}
  )
}

module.exports = CastList;