// Beware the overload type fn match the type of actual implementation
function reverse(string: string): string;
function reverse<T>(array: T[]): T[];
function reverse(stringOrArray: string | any[]) {
  return typeof stringOrArray === "string"
    ? [...stringOrArray].reverse().join("")
    : stringOrArray.slice().reverse();
}

const reversed = reverse("Typescript");
const reversed2 = reverse([1, 2, 3, 4]);
