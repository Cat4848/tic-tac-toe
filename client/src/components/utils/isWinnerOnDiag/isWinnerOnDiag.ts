import { SquareValue } from "../../../lib/types";
import isWinnerOnRow from "../isWinnerOnRow/isWinnerOnRow";

export const isWinnerOnDiag = (board: SquareValue[][]) => {
  const diagLeftToRight = getDiagLeftToRight(board);
  const isWinnerOnDiagLeftToRight = isWinnerOnRow(diagLeftToRight);
  if (isWinnerOnDiagLeftToRight) return true;
  const diagRightToLeft = getDiagLeftToRight(board);
  const isWinnerOnDiagRightToLeft = isWinnerOnRow(diagRightToLeft);
  if (isWinnerOnDiagRightToLeft) return true;
  return false;
};

export const getDiagLeftToRight = (board: SquareValue[][]) => {
  const diag = board.map((row, i) => row[i]);
  return diag;
};

export const getDiagRightToLeft = (board: SquareValue[][]) => {
  const reversedBoard = board.reverse();
  const diag = getDiagLeftToRight(reversedBoard);
  return diag;
};
