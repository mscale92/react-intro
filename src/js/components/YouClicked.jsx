var React = require('react');

var YouClicked = React.createClass({
    _handleButtonClick: function(){
        
        var clickCount = this.state.timesClicked + 1;
        if(clickCount == 1){
            this.state.message = "You've clicked me once"
        }
        else if(clickCount == 2){
            this.state.message = "You've clicked me twice"
        }
        else{
            this.state.message = "You've clicked me " + clickCount + " times"
        }
        
        
        this.setState({
            timesClicked: clickCount,
            message: this.state.message
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
                <p>{this.state.message}</p>
                
            </div>
        );
    }
})

module.exports = YouClicked;