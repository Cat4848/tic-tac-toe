import { extractDiagLeftToRight } from "../isWinnerOnDiag";
import { SquareValue } from "../../../../lib/types";

test("if is extracts the diagonal correctly on a 3x3 board", () => {
  const board: SquareValue[][] = [
    ["O", "X", "O"],
    ["O", "O", "X"],
    ["X", "X", "O"]
  ];
  const extractedDiag = extractDiagLeftToRight(board);
  const manualDiag = [board[0][0], board[1][1], board[2][2]];
  expect(extractedDiag).toStrictEqual(manualDiag);
});
