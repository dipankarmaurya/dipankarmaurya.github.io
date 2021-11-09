
// function to find volume of cylinder
//formula to find volume of Cylinder 2*r*r*h
function volumeOfCylinder(height, radious) {
    
    return (22 / 7) * radious * radious * height;
}

// function to find volume of cylinder
//formula to find surface area of cylinder 2*(22/7)*r*h + 2*(22/7)*r*r;
function surfaceAreaOfCylinder(height, radious) {
    return (2 * (22 / 7) * radious * height) + (2 * (22 / 7) * radious * radious);
}

// cylinder object which have height and radious
let cylinder = {
    "height": 20,
    "radious":5
}

var volume = volumeOfCylinder(cylinder.height, cylinder.radious);
var surfaceArea = surfaceAreaOfCylinder(cylinder.height, cylinder.radious);
console.log(volume,surfaceArea);