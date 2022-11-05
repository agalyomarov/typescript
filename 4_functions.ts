function add(a: number, b: number): number {
  return a + b;
}

function to_upper_case(str: string): string {
  return str.trim().toUpperCase();
}

interface MyPosition {
  x: number | undefined;
  y: number | undefined;
}

interface MyPositionWithDefault extends MyPosition {
  default: string;
}

function position(): MyPosition;
function position(a: number, b: number): MyPosition;
function position(a: number): MyPositionWithDefault;

function position(a?: number, b?: number): MyPositionWithDefault | MyPosition {
  if (!a && !b) {
    return {
      x: undefined,
      y: undefined,
    };
  }
  if (a && !b) {
    return {
      x: a,
      y: undefined,
      default: a.toString(),
    };
  }
  return {
    x: a,
    y: b,
  };
}

console.log("Empty: ", position());
console.log("One param: ", position(42));
console.log("Two param: ", position(10, 15));

interface Example {
  x: number | undefined;
  y: number | undefined;
}

interface Example_2 extends Example {
  default: number;
}

function example(a?: number, b?: number): Example;
function example(): Example_2;

function example(a?: number, b?: number): Example | Example_2 {
  if (a && b) {
    return {
      x: a,
      y: b,
    };
  }
  return {
    x: undefined,
    y: undefined,
    default: 10,
  };
}

console.log(example(42, 19));
console.log(example());

interface Rect {
  x: number | undefined;
  y: number | undefined;
}

function rect(a?: number, b?: number): Rect;

function rect(a?: number, b?: number) {
  if (a !== undefined || b !== undefined) {
    return {
      x: a,
      y: b,
    };
  }
  return {
    x: undefined,
    y: undefined,
  };
}

console.log(rect(1, 2));
console.log(rect());
