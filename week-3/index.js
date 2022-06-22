const express = require('express');

const app = express();

app.set('view engine','pug');

app.get('/', (req, res)=>{
    res.render('index');
});

app.get('/cards', (req, res)=>{
    res.locals.prompt = "who is it?";
    res.render('card');
});

app.listen(3000, ()=>{
    console.log('This application is running on localhost:3000!');
});