
function paintWall(n, h, w) {
    
    var areaOfWall = h * w;
    return n/areaOfWall;
}

var n = 5;
var h = 6;
var w = 6;

var totalWallPaint = paintWall(n, h, w);

if (totalWallPaint > 0) {
    console.log('total wall painted is --->' + totalWallPaint);
}
else {
    console.log('You need to go shop for buy more paint');
}
