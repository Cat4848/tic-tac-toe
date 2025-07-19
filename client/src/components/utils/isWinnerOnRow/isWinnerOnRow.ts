import { deepCopy } from "../general/general";
import { SquareValue } from "../../../types";

const isWinnerOnRow = (row: SquareValue[]) => {
  const deepRow = deepCopy(row);
  const first = deepRow[0];
  if (!first) return false; // handle undefined values
  let isWinner = true;
  for (let i = 1; i < deepRow.length; i++) {
    if (deepRow[i] !== first) {
      isWinner = false;
      break;
    }
  }
  return isWinner;
};
export default isWinnerOnRow;
