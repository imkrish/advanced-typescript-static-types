const numbers = [0, 1, 2, [3, 4], 5, [6], [7], 8, 9];
const chars = ["a", "b", ["c", "d"]];

function isFlat<T>(array: (T | T[])[]): array is T[] {
  return !array.some(Array.isArray);
}

function flatten<T>(array: (T | T[])[]): T[] {
  const flattened: T[] = [];
  for (const element of array) {
    if (Array.isArray(element)) {
      flattened.push(...element);
    } else {
      flattened.push(element);
    }
  }
  return flattened;
}

if (isFlat(numbers)) {
  numbers;
}

const nums = flatten(numbers);
const text = flatten(chars);
