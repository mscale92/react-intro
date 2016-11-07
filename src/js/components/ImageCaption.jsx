var React = require('react');
    // require our react mod

var ImageCaption = React.createClass({
    //name our component ImageCaption//
  propTypes: {
    source: React.PropTypes.string.isRequired,
            // define the type of our prop, proptypes
                //here as a string
    text: React.PropTypes.string.isRequired
            // once again, define the type
                //also a string
  },
  render: function() {

    return (
      <figure>
        <img src={this.props.source}/>
          <figcaption>
            {this.props.text}
          </figcaption>
    </figure>
    );
  }
});

module.exports = ImageCaption;
// export our component