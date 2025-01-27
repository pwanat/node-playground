
import { test, describe, it, expect } from 'vitest';
import { solution } from './main.ts';

const cases = [
  {a: 'timetopractice', b: 'toc', expected: 'toc'},
  {a: 'zoomlazapzo', b: 'oza', expected: 'apzo'},
  {a: 'zoom', b: 'zooe', expected: ''},
];

describe('Main tests', () => {

  test.each(cases)(
    "$a as argument, returns $expected",
    ({a, expected}) => {
      const result = solution(a, b);
      expect(result).toEqual(expected);
    }
  );
});