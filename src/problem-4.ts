type Circle = {
    shape: "circle";
    radius: number;
}
type Rectangle = {
    shape: "rectangle";
    width: number;
    height: number
}

type UniqueShape = Circle | Rectangle;

const calculateShapeArea = (shape: UniqueShape): number => {
    if (shape.shape === "circle") {
        return parseFloat((Math.PI * shape.radius * shape.radius).toFixed(2))
    } else if (shape.shape === "rectangle") {
        return shape.height * shape.width
    }
    return 0
}


const circleArea: number = calculateShapeArea({ shape: "circle", radius: 5 });
// console.log(circleArea);

const rectangleArea = calculateShapeArea({
    shape: "rectangle",
    width: 4,
    height: 6,
});
console.log(rectangleArea); 