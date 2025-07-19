import { SquareValue } from "../../lib/types";

export const isRowWinner = (row: SquareValue[]) => {
  let isWinner = true;
  const first = row[0];
  if (!first) return false;
  for (let i = 1; i < row.length; i++) {
    if (row[i] !== first) {
      isWinner = false;
      break;
    }
  }
  return isWinner;
};
