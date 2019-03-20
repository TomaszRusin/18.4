

var MovieTitle = React.createClass({

    render: function() {
        return (
            React.createElement('p', {className: 'title'}, 'Tytuł: ' + this.props.movieTitle)
        )
    }
})