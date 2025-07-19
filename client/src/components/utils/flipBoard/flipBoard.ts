import { deepCopy } from "../general/general";
import { SquareValue } from "../../../lib/types";

const flipBoard = (board: SquareValue[][]) => {
  const columns = deepCopy(board);
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      columns[i][j] = board[j][i];
    }
  }
  return columns;
};
export default flipBoard;
