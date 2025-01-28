
import { test, describe, expect } from 'vitest';
import { processNumbers } from './main.ts';

const testArray = Array(250_000).fill(-10).concat([-99], Array(250_000).fill(1));

const cases = [
  {a: [], expected: []},
  {a: [-1, -2, -3, 2], expected: [-1, -3]},
  {a: [-1, -2, -3, 1], expected: [-2, -3]}, // remove head
  {a: [-1, -2, -3, 3], expected: [-1, -2]}, // remove tail
  {a: [-1, -2, -3, 4], expected: [-1, -2, -3]}, // remove out of index
  {a: [0, -1, -2, 0, -3, 0, 4, 0], expected: [-1, -2, -3]}, // with zeros
  {a: testArray, expected: [-99]},
];

describe('Main tests', () => {

  test.each(cases)(
    "$a as argument, returns $expected",
    ({a, expected}) => {
      const result = processNumbers(a);
      expect(result).toEqual(expected);
    }
  );
});