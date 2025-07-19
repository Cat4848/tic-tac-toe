import React, { useEffect, useState } from "react";
import { SquareValue } from "../lib/types";
import { v4 as uuid } from "uuid";
import isWinnerOnRows from "./utils/isWinnerOnRows/isWinnerOnRows";
import flipBoard from "./utils/flipBoard/flipBoard";
import { isWinnerOnDiag } from "./utils/isWinnerOnDiag/isWinnerOnDiag";

const Game = () => {
  const [board, setBoard] = useState<SquareValue[][]>([
    [undefined, undefined, undefined],
    [undefined, undefined, undefined],
    [undefined, undefined, undefined]
  ]);
  const [moveNo, setMoveNo] = useState(0);
  const isXNext = moveNo % 2 === 0;

  useEffect(() => {
    const isWinning = isWinner();
    console.log("board", board);
    console.log("isWinning", isWinning);
  }, [moveNo]);

  const isWinner = () => {
    const isRowsWinner = isWinnerOnRows(board);
    if (isRowsWinner) return true;
    const flippedBoard = flipBoard(board);
    const isColumnsWinner = isWinnerOnRows(flippedBoard);
    if (isColumnsWinner) return true;
    const isDiagWinner = isWinnerOnDiag(board);
    if (isDiagWinner) return true;
    return false;
  };

  const handleClick = (rowNo: number, squareNo: number) => {
    setBoard((board) => {
      return board.map((row, i) => {
        return row.map((square, j) => {
          if (rowNo === i && squareNo === j && !square) {
            let targetSquare: SquareValue = undefined;
            if (isXNext) {
              targetSquare = "X";
            } else {
              targetSquare = "O";
            }
            setMoveNo(moveNo + 1);
            return targetSquare;
          } else {
            return square;
          }
        });
      });
    });
  };

  return (
    <div className="flex flex-col mt-10 items-center gap-10">
      <div className="font-bold text-2xl">Tic Tac Toe</div>
      <div className="flex flex-col gap-1">
        {board.map((row, i) => (
          <div key={uuid()} className="flex gap-1">
            {row.map((square, j) => (
              <div
                key={uuid()}
                className="border-2 border-gray-900 w-10 h-10 cursor-pointer items-center justify-center text-2xl font-bold flex"
                onClick={() => handleClick(i, j)}
              >
                {square}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Game;
