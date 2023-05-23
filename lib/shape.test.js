const { Shape, Triangle, Circle, Square} = require ('./shape');

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