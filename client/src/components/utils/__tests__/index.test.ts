import { isRowWinner } from "..";
import { SquareValue } from "../../../lib/types";

test("if it validates correctly a winning O row", () => {
  expect.assertions(1);
  const validValues: SquareValue[] = ["O", "O", "O"];
  const isWinner = isRowWinner(validValues);
  expect(isWinner).toBe(true);
});

test("if it validates correctly a winning X row", () => {
  expect.assertions(1);
  const validValues: SquareValue[] = ["X", "X", "X", "X"];
  const isWinner = isRowWinner(validValues);
  expect(isWinner).toBe(true);
});

test("if it validates correctly a losing row", () => {
  expect.assertions(1);
  const validValues: SquareValue[] = ["X", "O", "O"];
  const isWinner = isRowWinner(validValues);
  expect(isWinner).toBe(false);
});
