import { SquareValue } from "../../lib/types";

export const isWinnerOnRows = (board: SquareValue[][]) => {
  for (const row of board) {
    const isWinner = isWinnerOnRow(row);
    if (isWinner) {
      return true;
    }
  }
};

export const isWinnerOnRow = (row: SquareValue[]) => {
  const first = row[0];
  if (!first) return false; // handle undefined values
  let isWinner = true;
  for (let i = 1; i < row.length; i++) {
    if (row[i] !== first) {
      isWinner = false;
      break;
    }
  }
  return isWinner;
};
