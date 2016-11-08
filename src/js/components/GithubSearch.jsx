var React = require('react');
var $ = require("jquery");
var GithubSearchForm = require("./GithubSearchForm")
var GithubUser = require("./GithubProfile")

var GithubSearch = React.createClass({
    _handleSearch: function(searchTerm){
        console.log(searchTerm);
        this.setState({
            user: searchTerm
        })
    },
  getInitialState: function() {
    return {};
  },
  render: function() {
    return (
      <div>
        <GithubSearchForm onSearch={this._handleSearch}/>
        {this.state.user ? <GithubUser username={this.state.user}/> : null}
      </div>
    );
  }
});

module.exports = GithubSearch;