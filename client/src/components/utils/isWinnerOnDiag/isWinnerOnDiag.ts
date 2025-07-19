import { SquareValue } from "../../../lib/types";

const isWinnerOnDiag = () => {};

export const extractDiagLeftToRight = (board: SquareValue[][]) => {
  const diag = board.map((row, i) => row[i]);
  return diag;
};

export const extractDiagRightToLeft = (board: SquareValue[][]) => {
  const reversedBoard = board.reverse();
  const diag = extractDiagLeftToRight(reversedBoard);
  return diag;
};
