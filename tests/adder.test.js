const { add } = require('../src/adder');

test('add adds two numbers correctly', () => {
  expect(add(1, 2)).toBe(3);
});
