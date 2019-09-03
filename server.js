// see a list of pre-populated movies
// add a movie to the list
// update movie information
// remove a movie
// see only released movies

const express = require('express');

const server = express();

let movieId = 5;
let actorId = 3;

let actors = [
    {
        id: 1,
        name: 'Elijah Wood',
        movies: [1, 2]
    },
    {
        id: 2,
        name: 'Chris Evans',
        movies: [4]
    },
]

let movies = [
    {
        id: 1,
        name: "The Fellowship of the Ring",
        released: true,
        rating: 5
    },
    {
        id: 2,
        name: "The Two Towers",
        released: true,
        rating: 4
    },
    {
        id: 3,
        name: "The Childen of Hurin",
        released: false,
        rating: null
    },
    {
        id: 4,
        name: "Avengers: Endgame",
        released: true,
        rating: 5,
    },
    {
        id: 5,
        name: "Zootopia",
        released: true,
        rating: 2,
    },
];

// sanity check endpoint
server.get('/', (req, res) => {
    res.status(200).json({ api: 'up...' });
});

server.get('/api/movies', (req, res) => {
    res.status(200).json(movies);

});

// as a user of this api, I want an endpoint to see a list of actors so that I can see all of the actors
// teaches express to parse 
server.use(express.json());

// sanity check endpoint
server.get('/', (req, res) => {
    res.status(200).json({ api: 'up...' });
});

server.get('/api/movies', (req, res) => {
    const minRating = req.query.minrating;

    let result = [...movies];

    // if the client provides a minRating, filter the response
    if (minRating) {
        result = movies.filter(m => m.rating >= minRating);
    }

    res.status(200).json(movies);
});

server.post('/api/movies', (req, res) => {
    const movie = req.body;

    // add the new id
    movie.id = movieId++;
    movies.push(movie);

    // return correct http status code for operation
    res.status(201).json(movies);
});

server.delete('/api/movies/:id', (req, res) => {
    const id = req.params.id;

    movies = movies.filter(m => m.id !== Number(id));

    res.status(200).json(movies);
});

// export default server
module.exports = server;
