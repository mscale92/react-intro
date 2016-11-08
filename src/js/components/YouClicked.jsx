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
    _resetBtn: function(){
        this.setState({
            timesClicked: this.state.timesClicked = 0,
            timesReset: this.state.timesReset + 1,
            message: "Click to start counting again"
        })
    },
    getInitialState: function(){
        return {
            timesClicked: 0,
            message: "You have not clicked yet!",
            timesReset: 0
        }
    },
    render: function(){
        return(
            <div>
                <button onClick={this._handleButtonClick}>Click Me</button>
                <button onClick={this._resetBtn}>Reset</button>
                <p>{this.state.message}</p>
                <p>{this.state.timesReset > 0 ? "You've reset " + this.state.timesReset : null}</p>
            </div>
        );
    }
})

module.exports = YouClicked;