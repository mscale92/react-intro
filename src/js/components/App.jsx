var React = require('react');
var ImageCaption = require('./ImageCaption')
var Layout = require('./Layout')
var GuessTheNumber = require('./GuessTheNumber')
var YouClicked = require("./YouClicked")
var CharacterCounter = require("./CharacterCounter")
var CharacterLimit = require("./CharacterLimit")
var NumberGuessing = require("./NumberGuessing")

var imageList = [
  {id: 42, source: "http://placekitten.com/g/210/210", text: "Hello kittenz!"},
  {id: 43, source: "https://facebook.github.io/react/img/logo.svg", text: "React Logo"},
  {id: 44, source: "https://media.giphy.com/media/EldfH1VJdbrwY/giphy.gif", text: "Mind Blown!"}
];



var App = React.createClass({
  renderImage: function(obj){
    return <ImageCaption key={obj.id} source = {obj.source} text = {obj.text} />;
    },
  render: function() {
    return (
      <main>
        <h1>My first React App</h1>
        <hr/>
        <h2>Testing image</h2>
          <ImageCaption source="http://placekitten.com/g/210/210" text="Mew!"/>
        <hr/>
        <h2>Triple Threat</h2>
        <div>
          {imageList.map(this.renderImage)}
        </div>
        <hr/>
        <h2>Testing Layout</h2>
        <Layout children={
          <div>
            <h2>About Us</h2>
            <p>We are <a href="https://facebook.github.io/react/" target="_blank">React</a> Developers</p>
          </div>
        }/>
        <hr/>
        <h2>Guess a number between 1 and 20</h2>
        <GuessTheNumber numberToGuess= {15} />
        <hr/>
        <h2> Click Counter! </h2>
        <YouClicked/>
        <hr/>
        <h2>Character Counter</h2>
        <CharacterCounter/>
        <hr/>
        <h2>Character Counter with Limit</h2>
        <CharacterLimit limit={120}/>
        <hr/>
        <NumberGuessing/>
      </main>
    );
  }
});

module.exports = App;