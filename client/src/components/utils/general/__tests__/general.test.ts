import { buildBoard } from "../general";

test("if the created board is an Array", () => {
  expect.assertions(1);
  const size = 3;
  const board = buildBoard(size);
  expect(Array.isArray(board)).toBe(true);
});

test("if the created board length is correct", () => {
  expect.assertions(1);
  const size = 5;
  const board = buildBoard(size);
  expect(board.length).toBe(size);
});

test("if the board's row's length is correct", () => {
  const size = 5;
  expect.assertions(size);
  const board = buildBoard(size);
  for (const row of board) {
    expect(row.length).toBe(size);
  }
});

test("if the board's square's value is undefined", () => {
  const size = 5;
  expect.assertions(size * size);
  const board = buildBoard(size);
  for (const row of board) {
    for (const square of row) {
      expect(square).toBe(undefined);
    }
  }
});
