import {
  getDiagLeftToRight,
  getDiagRightToLeft,
  isWinnerOnDiag
} from "../isWinnerOnDiag";
import { SquareValue } from "../../../../lib/types";

test("if is extracts the left to right diagonal correctly on a 3x3 board", () => {
  expect.assertions(1);
  const board: SquareValue[][] = [
    ["O", "X", "O"],
    ["O", "O", "X"],
    ["X", "X", "O"]
  ];
  const extractedDiag = getDiagLeftToRight(board);
  const manualDiag = [board[0][0], board[1][1], board[2][2]];
  expect(extractedDiag).toStrictEqual(manualDiag);
});

test("if is extracts the right to left diagonal correctly on a 3x3 board", () => {
  expect.assertions(1);
  const board: SquareValue[][] = [
    ["O", "X", "O"],
    ["O", "O", "X"],
    ["X", "X", "O"]
  ];
  const manualDiag = [board[2][0], board[1][1], board[0][2]];
  const extractedDiag = getDiagRightToLeft(board);
  expect(extractedDiag).toStrictEqual(manualDiag);
});

test("if is winner on losing 5x5 board", () => {
  expect.assertions(1);
  const board: SquareValue[][] = [
    ["X", "X", "O", "X", "X"],
    ["X", "O", "X", "X", "O"],
    ["O", "X", "X", "X", "O"],
    ["O", "X", "O", "O", "X"],
    ["O", "X", "O", "X", "O"]
  ];
  const isWinner = isWinnerOnDiag(board);
  expect(isWinner).toBe(false);
});

test("if is winner on diagonal on a winning 3x3 board", () => {
  expect.assertions(1);
  const board: SquareValue[][] = [
    ["O", "X", "O"],
    ["O", "O", "X"],
    ["X", "X", "O"]
  ];
  const isWinner = isWinnerOnDiag(board);
  expect(isWinner).toBe(true);
});

test("if is winner on left to right diagonal on a winning 5x5 board", () => {
  expect.assertions(1);
  const board: SquareValue[][] = [
    ["O", "X", "O", "X", "O"],
    ["X", "O", "X", "X", "O"],
    ["O", "X", "O", "X", "O"],
    ["O", "X", "O", "O", "X"],
    ["O", "X", "O", "X", "O"]
  ];
  const isWinner = isWinnerOnDiag(board);
  expect(isWinner).toBe(true);
});

test("if is winner on right to left diagonal on a winning 5x5 board", () => {
  expect.assertions(1);
  const board: SquareValue[][] = [
    ["X", "X", "O", "X", "X"],
    ["X", "O", "X", "X", "O"],
    ["O", "X", "X", "X", "O"],
    ["O", "X", "O", "O", "X"],
    ["X", "X", "O", "X", "O"]
  ];
  const isWinner = isWinnerOnDiag(board);
  expect(isWinner).toBe(true);
});
