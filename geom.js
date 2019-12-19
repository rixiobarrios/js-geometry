class Rectangle {
    constructor(length, width) {
        this.length = length;
        this.width = width;
    }
    isSquare() {
        if (this.length === this.width) {
            return true;
        } else {
            return false;
        }
    }
    calcArea() {
        return this.width * this.length;
    }
    perimeter() {
        return this.width * 2 + this.length * 2;
    }
}
let rect = new Rectangle(4, 5);
console.log(rect.width);
console.log(rect.length);
console.log(rect.isSquare(4, 5));
console.log(rect.calcArea(4, 5));
console.log(rect.perimeter(4, 5));
console.log(rect);

class Triangle {
    constructor(sideA, sideB, sideC) {
        this.sideA = sideA;
        this.sideB = sideB;
        this.sideC = sideC;
    }
    isEquilateral() {
        if (this.sideA === this.sideB && this.sideB === this.sideC) {
            return true;
        } else {
            return false;
        }
    }
    isIsosceles() {
        if (
            (this.sideA === this.sideB) !== this.sideC ||
            (this.sideB === this.sideC) !== this.sideB ||
            (this.sideC === this.sideA) !== this.sideA
        ) {
            return true;
        } else {
            return false;
        }
    }
    calcArea() {
        return this.sideA * this.sideB * this.sideC;
    }
    isObtuse() {
        if (
            (this.sideA && this.sideB < this.sideC) ||
            (this.sideA && this.sideC < this.sideB) ||
            (this.sideB && this.sideC < this.sideA)
        ) {
            return true;
        } else {
            return false;
        }
    }
}
let triang = new Triangle(2, 2, 2);
console.log(triang.sideA);
console.log(triang.sideB);
console.log(triang.sideC);
console.log(triang.isEquilateral(2, 2, 2));
console.log(triang.isIsosceles(2, 2, 2));
console.log(triang.isIsosceles(2, 2, 2));
console.log(triang);
//Ran out of time and could not get rid of error on below, code missing.
class LineSegment extends Shape {
    constructor(x1, y1, x2, y2, numSides, color) {
        super(numSides, color);
        this.x1 = x1;
        this.y1 = y1;
        this.x2 = x2;
        this.y2 = y2;
    }
    length() {
        return Math.sqrt((this.x2 - this.x1) ** 2 + (this.y2 - this.y1) ** 2);
    }
}
let line1 = new LineSegment(1, 2, 6, 8);
let line2 = new LineSegment(4, 8, 9, 1);
console.log(line1);
console.log(line2);
// NOTE: DO NOT REMOVE OR ALTER
// module.exports = {
//     Rectangle: Rectangle,
//     Triangle: Triangle,
//     LineSegment: LineSegment
// };
