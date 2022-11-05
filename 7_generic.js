var array_any = [0, "1", true, {}];
var array_an_2 = [0, "1", true, {}];
var array_an_3 = [0, "1", true, {}];
var array_an_4 = [0, "1", true, {}];
console.log(array_any);
console.log(typeof array_any);
console.log(array_an_4);
// function array_reverse(array: any[]): any[] {
//   return array.reverse();
// }
// function array_reverse(array: [...any]): [...any] {
//   return array.reverse();
// }
function array_reverse(array) {
    return array.reverse();
}
console.log(array_reverse([0, 1, 2, 3, 4]));
console.log(array_reverse([0, true, "boolean"]));
