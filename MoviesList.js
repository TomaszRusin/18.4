
var MoviesList = React.createClass({
    propTypes: {
      items: React.PropTypes.array.isRequired,
    },
  
    render: function() {
      var contacts = this.props.items.map(function(movies) {
          return React.createElement(Movie, {item: movies, key: movies.id});
      });
  
      return (
        React.createElement('ul', {className: 'moviesList'}, contacts)
      );
    }
  });