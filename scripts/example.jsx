/** @jsx React.DOM */

var CommentBox = require('./CommentBox'),
    React = require('react');

React.render(
  <CommentBox url="http://localhost:3001/comments.json" pollInterval={2000} />,
  document.getElementById('content')
);
