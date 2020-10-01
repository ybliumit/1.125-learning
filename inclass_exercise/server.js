var express = require('express');
var app = express();

app.use(express.static('myfiles'));

app.listen(8080, function(){
    console.log('ready at 8080');
})