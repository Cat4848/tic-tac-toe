import { buildBoard } from "../general";

test("if builds board correctly", () => {
  const size = 3;
  const board = buildBoard(size);
  expect(Array.isArray(board)).toBe(true);
});
