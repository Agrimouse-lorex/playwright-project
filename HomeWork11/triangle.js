function triangleArea(base,height) {
    if(base <= 0 || height <= 0) throw new Error("Base and height must be positive numbers.");
    return (base * height) / 2;
}

module.exports = triangleArea;