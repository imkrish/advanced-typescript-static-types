interface Point {
  x: number;
  y: number;
  z: ReadonlyArray<number>;
}

const origins: Readonly<Point> = { x: 0, y: 0, z: [] };

let point: Partial<Point>;
point = { x: 0 };
point = { x: 0, a: 5 };
point = {};

type Nullable<T> = { [P in keyof T]: T[P] };
type Stringify<T> = { [P in keyof T]: string };

type StringPoint = Stringify<Point>;

let p: Partial<Nullable<Point>>;

p = { y: undefined, x: 5 };
