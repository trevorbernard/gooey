'use strict'

var React = require('react'),
    $ = require('jquery');

var SocialFeed = React.createClass({
  displayName: "SocialFeed",
  getInitialState: function() {
    return {data: []};
  },
  loadSocialFeed : function() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      success: function(data) {
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  componentDidMount: function() {
    this.loadSocialFeed();
    setInterval(this.loadSocialFeed, 2000);
  },
  render: function() {
    var commentNodes = this.state.data.map(function (user) {
      return (
        <li>{user.name} - <b>{user.description}</b></li>
      );
    });
    return (
      <div className="social-feed">
        {commentNodes}
      </div>
    );
  }
});

var SocialItem = React.createClass({
  displayName: "SocialItem",

  componentDidMount: function() {

  },
  render: function() {
    return (
      <div className="comment">
        <h2 className="commentAuthor">
        {this.props.author}
        </h2>
        {this.props.children}
      </div>
    );
  }
});

module.exports = SocialFeed;
