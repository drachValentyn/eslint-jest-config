const multiply = require('./app');

// it('check if 2*2 = 4', () => {
//   expect(multiply(2, 2)).toBe(4);
// });

describe('testing app.js', () => {
  it('check if 2*2 = 4', () => {
    expect(multiply(2, 2)).toBe(4);
  });
  it('check if args not found so it will be 0', () => {
    expect(multiply()).toBe(0);
  });
});
