import { buildBoard } from "../general";

test("if the created board is an Array", () => {
  const size = 3;
  const board = buildBoard(size);
  expect(Array.isArray(board)).toBe(true);
});

test("if the created board length is correct", () => {
  const size = 5;
  const board = buildBoard(size);
  expect(board.length).toBe(size);
});
