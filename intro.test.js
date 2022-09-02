const {sum, nativeNull} = require('./intro');

describe('Sum', () => {
  test('return sum of two values', () => {
    expect(sum(1, 2)).toBe(3);
  });

  test('return value correctly comparing to other values', () => {
    expect(sum(2, 3)).toBeGreaterThan(4);
  });

  test('return sum of two float', () => {
    expect(sum(0.3, 0.4)).toBeCloseTo(0.7);
  });
});

describe('Native null', () => {
  test('return false value null', () => {
    expect(nativeNull()).toBe(null);
    expect(nativeNull()).toBeNull();
    expect(nativeNull()).toBeFalsy();
    expect(nativeNull()).toBeDefined();
    expect(nativeNull()).not.toBeTruthy();
    expect(nativeNull()).not.toBeUndefined();
  });
});

