import { SquareValue } from "../../../lib/types";
import isWinnerOnRow from "../isWinnerOnRow/isWinnerOnRow";

const isWinnerOnRows = (board: SquareValue[][]) => {
  for (const row of board) {
    const isWinner = isWinnerOnRow(row);
    if (isWinner) {
      return true;
    }
  }
};
export default isWinnerOnRows;
