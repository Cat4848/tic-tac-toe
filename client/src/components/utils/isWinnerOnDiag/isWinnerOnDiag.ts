import { SquareValue } from "../../../lib/types";

const isWinnerOnDiag = (board: SquareValue[][]) => {};

export const getDiagLeftToRight = (board: SquareValue[][]) => {
  const diag = board.map((row, i) => row[i]);
  return diag;
};

export const getDiagRightToLeft = (board: SquareValue[][]) => {
  const reversedBoard = board.reverse();
  const diag = getDiagLeftToRight(reversedBoard);
  return diag;
};
