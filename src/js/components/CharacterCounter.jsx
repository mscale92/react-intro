var React = require('react');

var CharacterCounter = React.createClass({
    
    getInitialState: function(){
        return{
            currentInput: ""
        }
    },
    _handleInput: function(event){
        var value = event.target.value;
        this.setState({
            currentInput: value.length
            
        })
        
    },
    render: function(){
        
        return(
            <div>
                <input type="text" onInput={this._handleInput}/>
                <p>{this.state.currentInput}</p>
            </div>
        )
    }
});

module.exports = CharacterCounter;