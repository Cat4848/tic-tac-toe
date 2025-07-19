import { getDiagLeftToRight, getDiagRightToLeft } from "../isWinnerOnDiag";
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
