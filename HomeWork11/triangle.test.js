const triangleArea = require('./triangle')

describe('triangleArea function', () => {
    test('calculates the area of a triangle with base 4 and height 5 to be 10', () => {
        expect(triangleArea(4,5)).toBe(10);
    });
    test('calculates the area of a triangle with base 6 and height 3 to be 9', () => {
        expect(triangleArea(6,3)).toBe(9);
    });
    test('throws an error when a negative base is provided', () => {
        expect(() => triangleArea(-4, 5))
        .toThrow('Base and height must be positive numbers.');
    });
    test('throws an error when a negative height is provided', () => {
        expect(() => triangleArea(4, -5))
        .toThrow('Base and height must be positive numbers.');
    });

})