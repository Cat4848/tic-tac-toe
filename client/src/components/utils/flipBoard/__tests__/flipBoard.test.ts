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
