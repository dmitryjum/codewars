// Type challenge

/*
 Task 1:

 Create a type which takes a string or a number
*/

type Value = string | number;

type Task1 = [
  Expect<Equal<Value, "hello">>,
  Expect<Equal<Value, 4>>,
  Expect<NotEqual<Value, null>>,
  Expect<NotEqual<Value, Date>>
];

/*
 Task 2:

 Create a type which expects the boolean true if what's passed in is the number 2 or 4, else false
*/

type ValidNumber<T> = T extends 2 | 4 ? true : false;

type Task3 = [
  Expect<Equal<ValidNumber<2>, true>>,
  Expect<Equal<ValidNumber<4>, true>>,
  Expect<NotEqual<ValidNumber<1>, true>>,
  Expect<NotEqual<ValidNumber<"4">, true>>
];

/*
 Task 3:

 Create a type which expects a string which starts with a "#"
*/

type HashedValue = `#${string}`;

type Task2 = [
  Expect<Equal<HashedValue, "#hello">>,
  Expect<Equal<HashedValue, "#4">>,
  Expect<NotEqual<HashedValue, "hello">>,
  Expect<NotEqual<HashedValue, "4">>
];

/*
 Task 4:

 Create a Elemental type with the shared property "kind"…

 If Elemental's kind is "fire", the available properties should be:

 name = "Ember"
 city = "Element City" (optional)
 neighborhood = "Firetown"

 If Element's kind is "water", the available properties should be:

 name = "Wade"
 city = "Element City" (optional)
*/

type Elemental = void;

type Task4 = [
  Expect<Equal<Elemental, { kind: "fire"; neighborhood: "Firetown"; name: "Ember" }>>,
  Expect<Equal<Elemental, { city: "Element City"; kind: "water"; name: "Wade" }>>,
  Expect<NotEqual<Elemental, { kind: "fire"; neighborhood: "Firetown"; name: "Em" }>>,
  Expect<NotEqual<Elemental, { kind: "fire"; neighborhood: "Fire"; name: "Ember" }>>,
  Expect<NotEqual<Elemental, { city: "Element"; kind: "water"; name: "Wade" }>>,
  Expect<NotEqual<Elemental, { city: "Element City"; kind: "water"; neighborhood: "Firetown" }>>
];

/*
 Task 5:

Create a Residents type using the above type (hint: use TS utilities) which expects to following:

name = "Ember" or "Wade"
city = "Element City" (required)
*/

type Residents = void;

type Task5 = [
  Expect<Equal<Residents, { name: "Ember"; city: "Element City" }>>,
  Expect<Equal<Residents, { name: "Wade"; city: "Element City" }>>,
  Expect<NotEqual<Residents, { name: "Wade"; city: "Element" }>>,
  Expect<NotEqual<Residents, { name: "Em"; city: "Element City" }>>
];

// --- Do not edit below --- //

type Equal<T, U> = U extends T ? true : false;
type NotEqual<T, U> = T extends void ? false : U extends T ? false : true;
type Expect<T extends true> = T;
