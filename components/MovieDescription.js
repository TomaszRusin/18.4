

var MovieDescription = React.createClass({


    render: function() {
        return (
            React.createElement('p', {className: 'description'}, 'Opis: ' + this.props.movieDesc)
        )
    }
})