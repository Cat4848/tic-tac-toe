import flipBoard from "../flipBoard";
import { SquareValue } from "../../../../lib/types";

test("if flips board correctly correctly", () => {
  expect.assertions(1);
  const originalBoard: SquareValue[][] = [
    ["O", "X", "O"],
    ["O", "O", "X"],
    ["X", "X", "O"]
  ];
  const firstFlip = flipBoard(originalBoard);
  const secondFlip = flipBoard(firstFlip);

  expect(originalBoard).toStrictEqual(secondFlip);
});
