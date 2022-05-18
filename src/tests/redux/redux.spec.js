import reducer, { setList } from "./redux.store";

test("should return the initial state", () => {
  expect(reducer(undefined, {})).toEqual({
    list: [],
  });
});

test("should set a new list", () => {
  const previousState = { list: [] };
  expect(reducer(previousState, setList([1, 2, 3]))).toEqual({
    list: [1, 2, 3],
  });
});

// test("should handle a todo being added to an existing list", () => {
//   const previousState = [
//     {
//       text: "Run the tests",
//       completed: true,
//       id: 0,
//     },
//   ];
//   expect(reducer(previousState, todoAdded("Use Redux"))).toEqual([
//     {
//       text: "Run the tests",
//       completed: true,
//       id: 0,
//     },
//     {
//       text: "Use Redux",
//       completed: false,
//       id: 1,
//     },
//   ]);
// });
