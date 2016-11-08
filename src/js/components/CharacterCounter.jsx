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
                <p>{this.state.currentInput}</p>
                <textarea rows="10" cols="30" onInput={this._handleInput}/>
            </div>
        )
    }
});

module.exports = CharacterCounter;