
// const add = require('../main');

// module.exports = add;

function add (left, right) {
    return left + right;
}

it ('should add two numbers', () => {
    expect(add(2, 3)).toBe(5);
});