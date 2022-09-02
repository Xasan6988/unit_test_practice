const Lodash = require('./sync');

const _ = new Lodash();

describe('Lodash: compact', () => {
  let array;

  // Use beforeEach for reused value was the same in each test case
  beforeEach(() => {
    array = [false, 42, 0, '', true, null, 'hello'];
  })


  test('should be be defined', () => {
    expect(_.compact).toBeDefined();
    expect(_.compact).not.toBeUndefined();
  });

  test('should working array be editable', () => {
    array.push(...['one', 'two']);
    expect(array).toContain('one');
    expect(array).toContain('two');
  });

  test('should remove falsy falues from array', () => {
    const result = [42, true, 'hello'];
    expect(_.compact(array)).toEqual(result);
  });

  test('should NOT contain falsy values', () => {
    expect(_.compact).not.toContain(false);
    expect(_.compact).not.toContain(null);
    expect(_.compact).not.toContain(0);
    expect(_.compact).not.toContain('');
  });
});

describe('Lodash: groupBy', () => {
  test('should be defined', () => {
    expect(_.groupBy).toBeDefined();
    expect(_.groupBy).not.toBeUndefined();
  });

  test('should group array items by Math.floor', () => {
    const arr = [2.2, 2.4, 4.2, 3.1];
    const result = {
      2: [2.2, 2.4],
      4: [4.2],
      3: [3.1]
    }
    expect(_.groupBy(arr, Math.floor)).toEqual(result);
  });

  test('should group array items by length', () => {
    const arr = ['one', 'two', 'three'];
    const result = {
      3: ['one', 'two'],
      5: ['three']
    };
    expect(_.groupBy(arr, 'length')).toEqual(result);
  });

  test('should NOT return array', () => {
    expect(_.groupBy([], Math.trunc)).not.toBeInstanceOf(Array);
  });
});
