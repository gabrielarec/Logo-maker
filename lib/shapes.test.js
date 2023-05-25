const { Shape, Triangle, Circle, Square} = require ('./shapes');

describe ("Shape", () => {

    test ("constructor initializes color to empty string", () => {
        const shape = new Shape();
        expect (shape.color).toBe("");
    });

    test("setColor sets the color", () => {
        const shape = new Shape ();
        shape.setColor("red");
        expect(shape.color).toBe("red");
    });

    test("render throws an error", () => {
        const shape = new Shape();
        expect(() => shape.render ()).toThrowError("Not implemented");

    });
});

describe("Triangle", () => {
    test ("render returns SVG string with color", () => {
        const shape = new Triangle();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
    });
});

describe("Circle", () => {
    test ("render returns SVG string with color", () => {
        const shape = new Circle();
        shape.setColor("green");
        expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" fill="green" />');
    });
});
describe("Square", () => {
    test ("render returns SVG string with color", () => {
        const shape = new Square();
        shape.setColor("#FFA500");
        expect(shape.render()).toEqual('<rect x="50" y="50" width="150" height="150" fill="#FFA500" />');
    });
});