import { SquareValue } from "../../../../lib/types";
import isWinnerOnRows from "../isWinnerOnRows";

test("if it validates rows correctly on a winning 3X3 board", () => {
  expect.assertions(1);
  const winningBoard: SquareValue[][] = [
    ["O", "O", "O"], // winning row
    ["O", "O", "X"],
    ["O", "X", "O"]
  ];
  const isWinner = isWinnerOnRows(winningBoard);
  expect(isWinner).toBe(true);
});

test("if it validates rows correctly on a winning 5X5 board", () => {
  expect.assertions(1);
  const winningBoard: SquareValue[][] = [
    ["O", "O", "O", "X", "X"],
    ["X", "X", "X", "X", "X"], // winning row
    ["O", "O", "O", "X", "X"],
    ["X", "O", "O", "X", "X"],
    ["O", "X", "O", "X", "X"],
    ["O", "O", "X", "X", "X"]
  ];
  const isWinner = isWinnerOnRows(winningBoard);
  expect(isWinner).toBe(true);
});

test("if it validates rows correctly on a losing 5X5 board", () => {
  expect.assertions(1);
  const losingBoard: SquareValue[][] = [
    ["O", "O", "O", "X", "X"],
    ["X", "X", "X", "X", "O"],
    ["O", "O", "O", "X", "X"],
    ["X", "O", "O", "X", "X"],
    ["O", "X", "O", "X", "X"],
    ["O", "O", "X", "X", "X"]
  ];
  const isWinner = isWinnerOnRows(losingBoard);
  expect(isWinner).toBe(false);
});
