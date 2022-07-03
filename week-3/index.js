const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

// Path to call static pages
const path = require('path');

const app = express();

app.use(express.static('public'));

app.use(bodyParser.urlencoded({extended:false}));
app.use(cookieParser());

app.set('view engine','pug');

// Set Module routes
const getDataRoutes = require('./routes/getData');
const { raw } = require('body-parser');
app.use('/getData',getDataRoutes);

// Index
app.get('/', (req, res)=>{
    const name = req.cookies.username;
    if(name){
        res.render('index', {name});
    } else{
        res.redirect('myName');
    }
});

// To solve the CORS (?)
app.get('/', function (req, res) {
    res.set('Access-Control-Allow-Origin', 'http://localhost:3000');
    // res.end('hello world');
  });


// For cookies Q4
// GET and cookies, redirect
 app.get('/myName', (req, res)=>{ 
     const name = req.cookies.username;
     if(name){
         res.redirect('/');
     } else {
         res.render('myName');
     }
    });
// POST and cookies, redirect
 app.post('/myName', (req, res)=>{ 
     res.cookie('username',req.body.username);
     res.redirect('trackName?name=' + req.body.username);
 });

// TrackName
  app.get('/trackName',(req,res)=>{
    const name = req.cookies.username;
     if(name){
         res.render('/');
     } else {
         res.redirect('myName');
     }
  });

// Goodbye - To clear cookies
app.post('/goodbye', (req,res)=>{
    res.clearCookie('username');
    res.redirect('/myName');
});


// Error 404
// app.use((req,res,next)=>{
//     const err = new Error('Not found');
//     err.status = 404;
//     next(err);
// });
// // Error handling with Middleware
// app.use((err,req,res,next)=>{
//     res.locals.error = err;
//     // res.status();
//     res.render('error');
// });
// Middleware, Error handling
// app.use((req,res,next)=>{
//     const err = new Error('Error!');
//     next(err);
// });
// app.use((req,res,next)=>{
//     console.log('Hello world');
//     next();
// });


app.listen(3000, ()=>{
    console.log('This application is running on localhost:3000!');
});