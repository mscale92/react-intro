var React = require('react');
var ImageCaption = require('./ImageCaption')



var App = React.createClass({
  render: function() {
    return (
      <main>
        <h1>My first React App</h1>
        <hr/>
        <h2>Testing image</h2>
          <ImageCaption source="http://placekitten.com/g/210/210" text="This is a kittenz!"/>
        <hr/>
      </main>
    );
  }
});

module.exports = App;