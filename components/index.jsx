'use strict'

var SocialFeed = require('./SocialFeed'),
    React = require('react');

React.render(
  <SocialFeed
    url="http://localhost:9000/api/1.0/users/trevorbernard"
    foo="bar"/>,
    document.getElementById('content'));
