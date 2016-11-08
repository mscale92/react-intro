var React = require('react');
var $ = require("jquery");

var GithubProfile = React.createClass({
    propTypes: {
        username: React.PropTypes.string.isRequired
    },
    getInitialState: function(){
        return {};
    },
    fetchData: function(){
        
        $.getJSON('https://api.github.com/users/' + this.props.username + "?access_token=1bd05179e1851fe4f3b41f003491bd4af8a4d2b7", function(result){
            this.setState({
                user: result
            })
           
        }.bind(this))
        // make this bound to the component, not the callback
    },
    componentDidMount: function(){
        this.fetchData()
    },
    componentDidUpdate: function(prevProps){
        // console.log(prevProps.username, "killer queen")
        if(prevProps.username !== this.props.username){
            this.fetchData();
        }
    },
    render: function(){
        if(this.state.user){
            var userInfo = this.state.user
        
        return(<div className="github-user">
          <img className="github-user__avatar" src={userInfo.avatar_url}/>
          <div className="github-user__info">
            <h2>{userInfo.login} {" (" + userInfo.name + ") "}</h2>
            <p>{userInfo.bio ? "Bio: " + userInfo.bio : null}</p>
          </div>
        </div>);
        }
        else{
            return null;
        }
    }
});

module.exports = GithubProfile;