import { SquareValue } from "../../../lib/types";

const isWinnerOnDiag = () => {};

export const extractDiagLeftToRight = (board: SquareValue[][]) => {
  const diag = board.map((row, i) => row[i]);
  return diag;
};
