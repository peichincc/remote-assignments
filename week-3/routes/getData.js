const express = require('express');
const router = express.Router();

router.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "OPTIONS, GET, POST, PUT, PATCH, DELETE" // what matters here is that OPTIONS is present
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

// getData route
router.get('/', (req, res)=>{
    // console.log(req.query.number);
    let number = req.query.number;
    if (number === undefined){
        res.locals.prompt = "Lack of Parameter";
        res.render('getData');
    }
    else if (isNaN(number)){
        res.status(200).send('Wrong Parameter');
    } else {
        let sum=0;
        for (i=0; i<=number; i++){
            sum = sum + i;
        };
        res.status(200).send(sum+'');
    };
});


module.exports = router;