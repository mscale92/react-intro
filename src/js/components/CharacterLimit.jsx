var React = require('react');

var CharacterLimit = React.createClass({
    propTypes: {
        limit: React.PropTypes.number.isRequired
    },
    getInitialState: function(){
        return{
            currentInput: ""
        }
    },
    _handleInput: function(event){
        var value = event.target.value;
            if(value.length <= this.props.limit){
                this.setState({
                    currentInput: value
                })
            }
            else{
                
            }
        
    },
    render: function(){
        
        return(
            <div>
                <p>{this.state.currentInput ? this.props.limit - this.state.currentInput.length + " characters left": null}</p>
                <textarea rows="10" cols="30" value={this.state.currentInput} onInput={this._handleInput}/>
            </div>
        )
    }
});

module.exports = CharacterLimit;