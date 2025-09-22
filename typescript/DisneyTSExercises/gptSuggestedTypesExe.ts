// =========================
// EXERCISE A
// =========================
/*
  Build a Creature type with a discriminant "kind" and exact shapes:

  If kind = "dragon":
    - name = "Smaug"
    - breath = "fire"
    - cave = "Lonely Mountain"
    - habitat? = "Fairyland" (optional)

  If kind = "unicorn":
    - name = "Pearl"
    - horn = true
    - habitat? = "Fairyland" (optional)
    - (cave must be forbidden on unicorn)
*/

type Creature = {
  kind: "dragon";
  name: "Smaug";
  breath: "fire";
  cave: "Lonely Mountain";
  habitat?: "Fairyland"
} | {
  kind: "unicorn";
  name: "Pearl";
  horn: true
  cave?: never;
  habitat?: "Fairyland"
};

type ExerciseA = [
  Expect<Equal<Creature, { kind: "dragon"; name: "Smaug"; breath: "fire"; cave: "Lonely Mountain" }>>,
  Expect<Equal<Creature, { kind: "unicorn"; name: "Pearl"; horn: true }>>,
  Expect<NotEqual<Creature, { kind: "dragon"; name: "Smaug"; breath: "ice"; cave: "Lonely Mountain" }>>,
  Expect<NotEqual<Creature, { kind: "unicorn"; name: "Pearl"; cave: "Lonely Mountain" }>>,
  Expect<NotEqual<Creature, { kind: "unicorn"; name: "Pearl"; habitat: "Mordor" }>>
];


// =========================
// EXERCISE B
// =========================
/*
  Using Creature, create a Sightings type (hint: TS utilities) that accepts:
    - name = "Smaug" or "Pearl"
    - habitat = "Fairyland" (required)

  i.e., a union like:
    { name: "Smaug"; habitat: "Fairyland" } | { name: "Pearl"; habitat: "Fairyland" }
*/

type Sightings = Required<Pick<Creature, "name" | "habitat">>;

type ExerciseB = [
  Expect<Equal<Sightings, { name: "Smaug"; habitat: "Fairyland" }>>,
  Expect<Equal<Sightings, { name: "Pearl"; habitat: "Fairyland" }>>,
  Expect<NotEqual<Sightings, { name: "Pearl"; habitat: "Anywhere" }>>,
  Expect<NotEqual<Sightings, { name: "Smaug" }>>
];


// --- Do not edit below --- //
type Equal<T, U> = U extends T ? true : false;
type NotEqual<T, U> = T extends void ? false : U extends T ? false : true;
type Expect<T extends true> = T;
