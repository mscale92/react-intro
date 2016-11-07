var React = require('react');
var ImageCaption = require('./ImageCaption')

var imageList = [
  {id: 42, source: "http://placekitten.com/g/210/210", text: "Hello kittenz!"},
  {id: 43, source: "https://facebook.github.io/react/img/logo.svg", text: "React Logo"},
  {id: 44, source: "https://media.giphy.com/media/EldfH1VJdbrwY/giphy.gif", text: "Mind Blown!"}
];



var App = React.createClass({
  renderImage: function(obj){
    return <ImageCaption source = {obj.source} text = {obj.text} />;
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
      </main>
    );
  }
});

module.exports = App;