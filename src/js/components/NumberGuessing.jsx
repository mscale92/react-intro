var React = require('react');

var NumberGuessing = React.createClass({
    propTypes: {
        
    },
    getInitialState: function(){
      return {};  
    },
        // need an initial state, regardless
            //so if it has to be empty, return an empty object
    _startGame: function(){
        this.setState({
            gameStatus: 'playing',
            numberToGuess: 4,
            guesses: []
        })
        // start the game
    },
    componentDidMount: function(){
        return this._startGame()
    }
    ,
    render: function(){
        console.log(this._startGame)
        // if(!this.state.gameStatus){
        //     return null;
        // }
        return(
            <div>
                <h2>Guess a number between 1 and 10</h2>
                <p>"Remaining tries " {this.state.gameStatus}</p>
                <p></p>
                <input type="text" ref="userGuess"/>
                <button onClick={this._handleButtonClick}>Guess!</button>
            </div>
        );
    }
});

module.exports = NumberGuessing;