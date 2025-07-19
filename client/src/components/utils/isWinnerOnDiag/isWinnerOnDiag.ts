import { deepCopy } from "..";
import { SquareValue } from "../../../lib/types";
import isWinnerOnRow from "../isWinnerOnRow/isWinnerOnRow";

export const isWinnerOnDiag = (board: SquareValue[][]) => {
  const deepBoard = deepCopy(board);
  const diagLeftToRight = getDiagLeftToRight(deepBoard);
  const isWinnerOnDiagLeftToRight = isWinnerOnRow(diagLeftToRight);
  if (isWinnerOnDiagLeftToRight) return true;
  const diagRightToLeft = getDiagRightToLeft(deepBoard);
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
