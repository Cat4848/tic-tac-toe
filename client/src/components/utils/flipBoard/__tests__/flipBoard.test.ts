import flipBoard from "../flipBoard";
import { SquareValue } from "../../../../lib/types";
import isWinnerOnRows from "../../isWinnerOnRows/isWinnerOnRows";

test("if flips board correctly", () => {
  expect.assertions(1);
  const originalBoard: SquareValue[][] = [
    ["O", "X", "O"],
    ["O", "O", "X"],
    ["X", "X", "O"]
  ];
  const firstFlip = flipBoard(originalBoard);
  const secondFlip = flipBoard(firstFlip);

  expect(originalBoard).toStrictEqual(secondFlip);
});

test("if it validates columns correctly on a winning 3X3 board", () => {
  expect.assertions(1);
  const originalBoard: SquareValue[][] = [
    ["O", "X", "O"] /**  */,
    ["O", "O", "O"] /** winning column */,
    ["X", "X", "O"] /** */
  ];
  const flippedBoard = flipBoard(originalBoard);
  const isWinner = isWinnerOnRows(flippedBoard);

  expect(isWinner).toBe(true);
});

test("if it validates columns correctly on a winning 5X5 board", () => {
  expect.assertions(1);
  const originalBoard: SquareValue[][] = [
    ["O", "X", "X", "X", "X"] /**  */,
    ["O", "X", "O", "O", "X"] /**  */,
    ["X", "X", "X", "O", "X"] /** winning column */,
    ["O", "O", "O", "O", "X"] /**  */,
    ["X", "O", "O", "O", "X"] /**  */,
    ["O", "X", "O", "X", "X"] /**  */
  ];
  const flippedBoard = flipBoard(originalBoard);
  const isWinner = isWinnerOnRows(flippedBoard);

  expect(isWinner).toBe(true);
});

test("if it validates columns correctly on a losing 5X5 board", () => {
  expect.assertions(1);
  const originalBoard: SquareValue[][] = [
    ["O", "X", "X", "X", "X"],
    ["O", "X", "O", "O", "O"],
    ["X", "X", "X", "O", "X"],
    ["O", "O", "O", "O", "X"],
    ["X", "O", "O", "O", "X"],
    ["O", "X", "O", "X", "X"]
  ];
  const flippedBoard = flipBoard(originalBoard);
  const isWinner = isWinnerOnRows(flippedBoard);

  expect(isWinner).toBe(false);
});
