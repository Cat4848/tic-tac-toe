import { buildBoard } from "../general";

test("if the created board is an Array", () => {
  const size = 3;
  const board = buildBoard(size);
  expect(Array.isArray(board)).toBe(true);
});
