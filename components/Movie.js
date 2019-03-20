
var Movie = React.createClass({
    propTypes: {
      item: React.PropTypes.array.isRequired,
      
    },
  
    render: function() {
      console.log(this.props.item.title)
      return (
        React.createElement('div', {className: 'Movie'},
          React.createElement(MovieTitle, {movieTitle: this.props.item.title}, ),
          React.createElement(MovieDescription, {movieDesc: this.props.item.desc}, ),
          React.createElement(MovieImage, {movieImg: this.props.item.url}, )
            )
        ) 
    },
  });