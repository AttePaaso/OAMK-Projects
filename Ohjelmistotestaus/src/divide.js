const divide = (a,b) => {
    if (typeof a !== 'number' || typeof b !== 'number'){
        throw new TypeError('Calculator expects two numbers')
    }
    if (Number.isNaN(a) || Number.isNaN(b)) {
        throw new TypeError("Arguments cannot be NaN");
    }
    if (b === 0) {
        throw new RangeError("Division by zero is not allowed");
    }
    if (!Number.isFinite(a) || !Number.isFinite(b)) {
        throw new TypeError("Arguments must be finite numbers");
    }

    return a / b
}

export { divide }