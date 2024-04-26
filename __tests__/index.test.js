import fill from '../index.js';

let arr;
beforeEach(() => {
  arr = [1, 2, 3, 4];
});

test('fill with start and end in range', () => {
  fill(arr, '*', 1, 3);
  expect(arr).toEqual([1, '*', '*', 4]);
});

test('fill with no start and end', () => {
  fill(arr, '*');
  expect(arr).toEqual(['*', '*', '*', '*']);
});

test('fill with start in range and no end', () => {
  fill(arr, '*', 2);
  expect(arr).toEqual([1, 2, '*', '*']);
});

test('fill with start out of range and no end', () => {
  fill(arr, '*', 4);
  expect(arr).toEqual([1, 2, 3, 4]);
});
