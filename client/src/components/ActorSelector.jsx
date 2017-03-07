var React = require('react');

var ActorSelector = React.createClass({
  getInitialState: function() {
    return {firstName: undefined, lastName: undefined}
  },

  render: function() {
    return (
      <div> 
        <form onSubmit={this.handleSubmit}>
          <label>
        First Name:
        <input type="text" value={this.state.firstName} onChange={this.handleChangeFirst} />
            </label>
          <label>
          Last Name:
          <input type="text" value={this.state.lastName} onChange={this.handleChangeLast} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }, 

  handleChangeFirst: function(event) {
    console.log(event.target.value);
    this.setState({firstName: event.target.value})
    console.log(this.state);
  }, 

  handleChangeLast: function(event) {
    this.setState({lastName: event.target.value})
  }, 

  handleSubmit: function(event) {
    event.preventDefault();
    this.props.didSelectActor(this.state.firstName, this.state.lastName);
  }
});

module.exports = ActorSelector;