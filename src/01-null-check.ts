function trimAndLower(text: string | null | undefined) {
  if (typeof text === "string") {
    return text.trim().toLocaleLowerCase();
  }
  return text;
}

console.log(trimAndLower("   test  "));
console.log(trimAndLower(null));
console.log(trimAndLower(undefined));

const container = document.getElementById("test")!; // ! assumes that it will always return DOM element
