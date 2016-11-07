var React = require('react');

var YouClicked = React.createClass({
    _handleButtonClick: function(){
        console.log(this.state.timesClicked + 1)
        
        this.setState({
            timesClicked: this.state.timesClicked + 1,
            message: "wow you've clicked me " + (this.state.timesClicked + 1)
        })
        
        
        
    },
    getInitialState: function(){
        return {
            timesClicked: 0,
            message: "You have not clicked yet!"
        }
    },
    render: function(){
        return(
            <div>
                <button onClick={this._handleButtonClick}>Click Me</button>
                
                <p>{this.state.timesClicked}</p>
                <p>{this.state.message}</p>
                
            </div>
        );
    }
})

module.exports = YouClicked;