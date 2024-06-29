// Primitives
let age: number;
age = 12;

let userName: string;
userName = "I";

let isInstructor: boolean;
isInstructor = true;

// More complex types
let hobbies: string[];
hobbies = ["0", "1"];

type Person = {
  name: string;
  age: number;
};

let person: Person;

person = {
  name: "I",
  age: 111111,
};

let people: Person[];

// Type inference
// let course = 'Resact asd as';

let course: string | number = "Resact asd as";

course = 123;

// Functions & types
function add(a: number, b: number) {
  return a + b;
}

function print(value: any) {
  console.log(value);
}

// Generic
function insertAtBeginning<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}
const demoArr = [1, 2, 3];
const updArr = insertAtBeginning(demoArr, -1);
const strArr = insertAtBeginning(['a', 'b'], 'c');
