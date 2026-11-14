import { divide } from "../src/divide.js";

describe('divide', () => {
    it("divides two positive numbers", () => {
        expect(divide(10,2)).toBe(5);
    });

    it("divides negative numbers", () => {
        expect(divide(-10,-2)).toBe(5);
    });

    it("divides a positive number by a negative number", () => {
        expect(divide(10,-2)).toBe(-5);
    });
    it("divides a negative number by a positive number", () => {
        expect(divide(-10, 2)).toBe(-5);
    });
    it("throws when input is invalid", () => {
        expect(() => divide('10', 2)).toThrow("Calculator expects two numbers");
    });
    it("throws when input is NaN", () => {
        expect(() => divide(Number("Hello World"), 2)).toThrow("Arguments cannot be NaN");
    });
    it("throws when dividing by zero", () => {
        expect(() => divide(10, 0)).toThrow("Division by zero is not allowed");
    });
    it("throws when dividing infinite", () => {
        expect(() => divide(Infinity, 1)).toThrow("Arguments must be finite numbers")
    });

});