const array_any: Array<any> = [0, "1", true, {}];
const array_an_2 = [0, "1", true, {}] as Array<any>;
const array_an_3: any[] = [0, "1", true, {}];
const array_an_4: [...any] = [0, "1", true, {}];

console.log(array_any);
console.log(typeof array_any);
console.log(array_an_4);

// function array_reverse(array: any[]): any[] {
//   return array.reverse();
// }

// function array_reverse(array: [...any]): [...any] {
//   return array.reverse();
// }

function array_reverse<T>(array: T[]): T[] {
  return array.reverse();
}

console.log(array_reverse([0, 1, 2, 3, 4]));
console.log(array_reverse([0, true, "boolean"]));
