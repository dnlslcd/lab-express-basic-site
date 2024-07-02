// Packages import
const express = require('express');
const logger = require('morgan');

// Express app creation
const app = express();

// Middleware
app.use(express.static('public'));
app.use(logger('dev'));


// Routes:

// home page
app.get('/', (req, res) => { 
    res.sendFile(__dirname + '/views/home.html');
});

// about page
app.get('/about', (req, res)=>{
res.sendFile(__dirname + '/views/about.html');
});

// works page
app.get('/works', (req, res)=>{
    res.sendFile(__dirname + '/views/works.html');
});

// gallery page
app.get('/photo-gallery', (req, res)=>{
    res.sendFile(__dirname + '/views/photo-gallery.html');
});

// 404 page
app.get('*', (req, res)=>{
    res.status(404).sendFile(__dirname + '/views/not-found.html');
});


// Levantar servidor
app.listen(3001, ()=>{
    console.log('Servidor levantado en el puerto 3000');
});