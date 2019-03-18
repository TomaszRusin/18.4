
var Movie = React.createClass({
    propTypes: {
      item: React.PropTypes.array.isRequired,
      
    },
  
    render: function() {
      return (
        React.createElement('div', {className: 'Movie'},
          React.createElement('p', {className: 'title'}, 'Tytuł: ' + this.props.item.title),
          React.createElement('p', {className: 'description'}, 'Opis: ' + this.props.item.desc),
          React.createElement('img', {src: this.props.item.url}, )
            )
        ) 
    },
  });