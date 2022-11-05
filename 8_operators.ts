interface Person {
  name: string;
  age: number;
}

type PersonKeys = keyof Person;

let person: PersonKeys = "name";
person = "age";

interface Test {
  _id: number;
  created_at: number;
  name: string;
  email: string;
}

type User = Exclude<keyof Test, "_id" | "created_at">;
type User_2 = Pick<Test, "name" | "email">;

let user: User = "name";
user = "email";

let user_2: User_2 = {
  name: "1",
  email: "1",
};
