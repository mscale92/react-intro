var React = require('react');

var GuessTheNumber = React.createClass({
    propTypes: {
        numberToGuess: React.PropTypes.number.isRequired
    },
    _handleButtonClick: function(){
        var guess = this.refs.userGuess.value;
        var num = this.props.numberToGuess;
        
        console.log(guess, "guess")
        console.log(num, "number")
        
        
        if (num == guess){
            //double equal, not triple
            alert("yes you win!")
        }
        else if(num > guess){
            alert("nope, too low")
        }
        else if(num < guess){
            alert("nope, too high")
        }
        else{
            alert("uh oh")
        }
    },
    render: function(){
        return(
            <div>
                <input type="text" ref="userGuess"/>
                <button onClick={this._handleButtonClick}>Guess!</button>
            </div>
        );
    }
});

module.exports = GuessTheNumber;