'use strict'

var SocialFeed = require('./SocialFeed'),
    React = require('react');

React.render(
  <SocialFeed 
  	url="http://localhost:3000/testdata.json"/>,
    document.getElementById('content'));

/// url="http://localhost:9000/api/1.0/users/trevorbernard"
// url="http://localhost:3000/index.html"
var LikeButton = React.createClass({
  getInitialState: function() {
    return {liked: false};
  },
  handleClick: function(event) {
    this.setState({liked: !this.state.liked});
  },
  render: function() {
    var text = this.state.liked ? 'like' : 'haven\'t liked';
    return (
      <p onClick={this.handleClick}>
        You {text} this. Click to toggle.
      </p>
    );
  }
});

React.render(
  <LikeButton />,
  document.getElementById('example')
);

