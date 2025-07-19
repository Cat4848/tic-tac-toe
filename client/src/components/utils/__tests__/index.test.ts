import { isRowWinner } from "..";
import { SquareValue } from "../../../lib/types";

test("if it validates correctly a winning row", () => {
  const validValues: SquareValue[] = ["O", "O", "O"];
  const isWinner = isRowWinner(validValues);
  expect(isWinner).toBe(true);
});
