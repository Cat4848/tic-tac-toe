import isWinnerOnRow from "../isWinnerOnRow";
import { SquareValue } from "../../../../lib/types";

test("if it validates correctly a winning O row", () => {
  expect.assertions(1);
  const validValues: SquareValue[] = ["O", "O", "O"];
  const isWinner = isWinnerOnRow(validValues);
  expect(isWinner).toBe(true);
});

test("if it validates correctly a winning X row", () => {
  expect.assertions(1);
  const validValues: SquareValue[] = ["X", "X", "X", "X"];
  const isWinner = isWinnerOnRow(validValues);
  expect(isWinner).toBe(true);
});

test("if it validates correctly a losing row 1", () => {
  expect.assertions(1);
  const validValues: SquareValue[] = ["X", "O", "O"];
  const isWinner = isWinnerOnRow(validValues);
  expect(isWinner).toBe(false);
});

test("if it validates correctly a losing row 2", () => {
  expect.assertions(1);
  const validValues: SquareValue[] = ["X", "X", "O"];
  const isWinner = isWinnerOnRow(validValues);
  expect(isWinner).toBe(false);
});

test("if it validates correctly a losing row 3", () => {
  expect.assertions(1);
  const validValues: SquareValue[] = ["O", "X", "O"];
  const isWinner = isWinnerOnRow(validValues);
  expect(isWinner).toBe(false);
});

test("if it validates correctly invalid values 1", () => {
  expect.assertions(1);
  const invalidValues: SquareValue[] = [undefined, undefined, undefined];
  const isWinner = isWinnerOnRow(invalidValues);
  expect(isWinner).toBe(false);
});

test("if it validates correctly invalid values 2", () => {
  expect.assertions(1);
  const invalidValues: SquareValue[] = ["O", undefined, undefined];
  const isWinner = isWinnerOnRow(invalidValues);
  expect(isWinner).toBe(false);
});
