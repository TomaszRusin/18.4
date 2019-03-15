
var movies = [
    {
        id: 1,
        title: 'Harry potter',
        desc: 'czary',
        url: 'https://timedotcom.files.wordpress.com/2014/07/301386_full1.jpg'
    },
    {
        id: 2,
        title: 'Lef',
        desc: 'Auu',
        url: 'https://cdn.smyk.com/media/catalog/product/cache/1/image/750x750/2091d5c437d0f7138d5a951d6205592d/1/8/181439.jpg'
    },
    {
        id: 3,
        title: 'Robot',
        desc: 'blip blop',
        url: 'https://static.generation-robots.com/6742-large_default/pepper-for-business-edition-humanoid-robot-2-years-warranty.jpg'
    }
];

var Movie = React.createClass({
    
    propTypes: {
      movies: React.PropTypes.array.isRequired,
    },
  
    render: function() {
        return (  React.createElement('li', {key: movies.id},
            React.createElement('h2', {}, movies.title),
            React.createElement('p', {}, movies.desc),
            React.createElement('img', {src: movies.url},))
        )}
    });



var element = React.createElement(Movie, {key: movies.id},);
ReactDOM.render(element, document.getElementById('app'));

