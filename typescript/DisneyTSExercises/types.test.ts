// types.test.ts
// Type-level tests for the DisneyTSExercises types.ts
// These rely on the global types declared in types.ts (no imports/exports).

/*
  Reuse the same Expect / Equal / NotEqual utilities declared in types.ts.
  The tests are arrays of Expect<...> so the TS compiler will error on mismatch.
*/

type Task4Tests = [
  // valid shapes should be assignable to Elemental
  Expect<Equal<Elemental, { kind: "fire"; neighborhood: "Firetown"; name: "Ember" }>>,
  Expect<Equal<Elemental, { kind: "water"; name: "Wade"; city?: "Element City" }>>,

  // invalid shapes must not be assignable
  Expect<NotEqual<Elemental, { kind: "fire"; neighborhood: "Firetown"; name: "Em" }>>,
  Expect<NotEqual<Elemental, { kind: "fire"; neighborhood: "Fire"; name: "Ember" }>>,
  Expect<NotEqual<Elemental, { city: "Element"; kind: "water"; name: "Wade" }>>,
  Expect<NotEqual<Elemental, { city: "Element City"; kind: "water"; neighborhood: "Firetown" }>>
];

type Task5Tests = [
  // Residents should allow Ember or Wade with required city
  Expect<Equal<Residents, { name: "Ember"; city: "Element City" }>>,
  Expect<Equal<Residents, { name: "Wade"; city: "Element City" }>>,

  // invalid variants should fail
  Expect<NotEqual<Residents, { name: "Wade"; city: "Element" }>>,
  Expect<NotEqual<Residents, { name: "Em"; city: "Element City" }>>
];

// Prevent this file from becoming a script module; keep types in global scope for tests.
export {};