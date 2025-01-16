import { expect, test } from "vitest";
import { sum } from '../../src/helpers/sum';

test('add 1 + 1 to equal 2', () => {
  expect(sum(1, 1)).toBe(2);
});
