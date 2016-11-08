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
            numberToGuess: Math.floor(Math.random() * 101),
            guesses: [],
            stat: ""
        })
        // start the game
    },
    componentDidMount: function(){
        return this._startGame()
    },
    _guess: function(){
        var guess = this.refs.userGuess.value;
        var num = this.state.numberToGuess;
        
        var updatedGuesses = this.state.guesses;
        updatedGuesses.push(guess);
            // update our array with another array
                // if we set guesses to push itself
                //it returns the push aka gives the value of the
                //length, not the new array
        this.setState({
            guesses: updatedGuesses
        })
            // always update the guesses array since it is
                // our limit
        
        if(this.state.guesses.length < 5){
            if(guess == num){
                this.setState({
                    gameStatus: 'win'
                })
            }
            else if(guess > num){
                this.setState({
                    stat: "HIGH"
                })
            }
            else{
                this.setState({
                    stat: "LOW"
                })
            }
        }
        else{
            this.setState({
                gameStatus: 'lose'
            })
        }
        
    },
    render: function(){
        // console.log(this.state.numberToGuess)
        
        if(!this.state.gameStatus){
            return null;
        }
        else if(this.state.gameStatus == 'win' || this.state.gameStatus == 'lose'){
            // render something completely different if they win or lose
            return(
                <div>
                    <h2>{this.state.gameStatus == 'win' ? "You won!" : null}</h2>
                    <h2>{this.state.gameStatus == 'lose' ? "You lost! the number was " + this.state.numberToGuess : null}</h2>
                    <button onClick={this._startGame}>New Game!</button>
                </div>
            )
            // either way start a new game
        }
            // This renders the game
        else{
            return(
                <div>
                    <h2>Guess a number between 1 and 10</h2>
                    <h3>{"Remaining tries " + (5 - this.state.guesses.length)}</h3>
                        
                    <h2>{this.state.stat ? "Too " + this.state.stat : null}</h2>
                        
                    <p>{this.state.guesses.length > 0 ? "Your guesses " + this.state.guesses.join(',') : null}</p>
                    <input type="text" ref="userGuess"/>
                    <button onClick={this._guess}>Guess!</button>
                </div>
            );
            // we use the length of the guesses array to set a limit
                // our limit is five, so we tell the user that they have
                // x many attempts left, which is five minus the current length
            // Give the user a hint as to whether or not their number was higher or
                // lower
        }
    }
});

module.exports = NumberGuessing;