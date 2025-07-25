import { deepCopy } from "../general/general";
import { SquareValue } from "../../../types";
import isWinnerOnRow from "../isWinnerOnRow/isWinnerOnRow";

const isWinnerOnRows = (board: SquareValue[][]) => {
  const deepCopyBoard = deepCopy(board);
  for (const row of deepCopyBoard) {
    const isWinner = isWinnerOnRow(row);
    if (isWinner) {
      return true;
    }
  }
  return false;
};
export default isWinnerOnRows;
