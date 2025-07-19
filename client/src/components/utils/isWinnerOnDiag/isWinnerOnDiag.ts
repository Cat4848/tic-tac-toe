import { SquareValue } from "../../../lib/types";

const isWinnerOnDiag = () => {};

export const extractDiagLeftToRight = (board: SquareValue[][]) => {
  const diag = board.map((row, i) => {
    return row[i];
  });
  return diag;
};
