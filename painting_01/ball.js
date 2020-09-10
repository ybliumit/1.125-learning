var length = data.length;

var ball;
ball = create();

var x = 0;
var y = 0;
var counter = 0;

for(var j=0; j<81; j++){
y = j*15;
for(var i=0; i<53; i++){
    x = i*15;
    create(x,y,painting[counter]);
    data.push({x:x,y:y,color:painting[counter]});
    counter++;
  }
}  
