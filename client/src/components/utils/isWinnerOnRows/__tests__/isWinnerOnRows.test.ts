import { SquareValue } from "../../../../lib/types";
import isWinnerOnRows from "../isWinnerOnRows";

test("if it validates correctly a winning 3X3 board 1", () => {
  expect.assertions(1);
  const winningBoard: SquareValue[][] = [
    ["O", "O", "O"],
    ["O", "O", "X"],
    ["O", "X", "O"]
  ];
  const isWinner = isWinnerOnRows(winningBoard);
  expect(isWinner).toBe(true);
});
