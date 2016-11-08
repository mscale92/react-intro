var React = require('react');
var $ = require("jquery");


var GithubSearchForm = React.createClass({
    propTypes: {
        onSearch: React.PropTypes.func.isRequired
    },
    _handleSubmit: function(event){
        this.props.onSearch(this.refs.userInput.value);
            // pass our userInput value to our onSearch prop
                // it is a function in the Search file
        event.preventDefault()
        // prevent refreshing the page
            // with REACT!
    },
    render: function() {
     
    return (
      <form onSubmit={this._handleSubmit}>
        <p>Enter a GitHub username:</p>
        <input type="text" ref="userInput"/>
        <button>Go!</button>
      </form>
    );
  }
});

module.exports = GithubSearchForm;