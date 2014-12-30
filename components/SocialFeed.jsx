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
    return (
      <div className="social-feed">
    {this.props.foo} - <a href="#"> Say Whatt?</a>
      <table>
        <tr>
          <td>{this.state.data.name}</td>
          <td>{this.state.data.description}</td>
        </tr>
      </table>

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
