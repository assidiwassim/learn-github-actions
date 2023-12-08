const calculate = require('./calculate')

test('test the calculate/sum function', () => {
    expect(calculate.sum(1,1)).toBe(2);
});