
import { test, describe, it, expect } from 'vitest';
import { solution } from './main.ts';

const cases = [
  {a: 1, b: 1, expected: 2},
  {a: 1, b: 2, expected: 3},
  {a: 2, b: 1, expected: 3},
];

describe('Main tests', () => {

  test.each(cases)(
    "$a and $b as arguments, returns $expected",
    ({a, b, expected}) => {
      const result = solution(a, b);
      expect(result).toEqual(expected);
    }
  );
});