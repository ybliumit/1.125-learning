var express = require('express');
var app = express();

app.get('/', function(req, res){
    res.send('hello!');
})

app.use(express.static('myfiles'));

app.listen(3000, function(){
    console.log('running on port 3000');
})