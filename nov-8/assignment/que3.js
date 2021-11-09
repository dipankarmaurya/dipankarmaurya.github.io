
function paintWall(n, h, w) {
    
    var areaOfWall = h * w;
    
    // var count = 0;
    // while (areaOfWall >= n) {
    //     areaOfWall -= n;
    //     count++;
    // }
    //or

    if (areaOfWall % n == 0)
        return areaOfWall / n;
    
    return (areaOfWall/n)+1;
}

var n = 5;
var h = 6;
var w = 6;

var totalWallPaint = paintWall(n, h, w);

console.log(totalWallPaint);
