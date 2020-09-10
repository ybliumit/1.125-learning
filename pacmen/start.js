var pos = 0;
const pacArray = [
    ['PacMan1.png', 'PacMan2.png'],
    ['PacMan3.png', 'PacMan4.png']
];
var direction = 0;
var focus = 0;

function Run() {
    let img = document.getElementById("PacMan");
    let imgWidth = img.width
    focus = (focus + 1) % 2;
    direction = checkPageBounds(direction, imgWidth);
    img.src = pacArray[direction][focus];
    if (direction) {
        pos -= 20;
        img.style.left = pos + "px";
    } else {
        pos += 20;
        img.style.left = pos + 'px'; //changing the position. 
    }
    setTimeout(Run, 100);
    // Use setTimeout to call Run every 200 millesecs
}

function checkPageBounds(direction, imgWidth) {
    //
    // Complete this to reverse direction on hitting page bounds
    //
    const IW = window.innerWidth;
    if (pos >= (IW-imgWidth)) {direction = 1;}
    console.log(pos);
    if (pos == 0) {direction = 0;} 
    return direction;
}