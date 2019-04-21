function sing(): never {
  while (true) {}
}

const result = sing();

function trim(text: string | null) {
  if (typeof text === "string") {
    return text.trim();
  }

  if (text === null) {
    return null;
  }

  return text; // never
}

enum ShirtSize {
  S,
  M,
  L,
  XL
}

function assertNever(value: never): never {
  throw Error();
}

function prettyPrint(size: ShirtSize) {
  switch (size) {
    case ShirtSize.S:
      return "Small";
    case ShirtSize.M:
      return "Medium";
    case ShirtSize.L:
      return "Large";
    case ShirtSize.XL:
      return "XL";
    default:
      // If we handle all of the switch case form ShirtSize
      // Then the type of size in default will be never type
      return assertNever(size);
  }
}
