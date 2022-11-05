const is_fetching: boolean = false;
const is_loading: boolean = true;

const int: number = 42;
const float: number = 4.2;
const num: number = 3e10;

const str: string = "Hello";

const array_number: number[] = [1, 1, 2, 3, 4, 5];
const number_array: Array<number> = [1, 1, 2, 3, 4, 5];
const words: string[] = ["Hello", "typescript"];

const contact: [string, number] = ["Vladelin", 12345];

let variable: any = 42;
variable = "New string";

function say_my_name(name: string): void {
  console.log(name);
}

function throw_error(message: string): never {
  throw new Error(message);
}

function infinite(): never {
  while (true) {}
}

say_my_name("Max");
throw_error("message");

type Login = string;
const login: Login = "admin";
// const login2: Login = 2;

type ID = string | number | boolean;
const id_1: ID = 1;
const id_2: ID = "string";
const id_3: ID = true;

type some_type = undefined | null | string;
