import React, { useState } from "react";
import { XorO } from "./types";
import { v4 as uuid } from "uuid";

export const Main = () => {
  const [board, setBoard] = useState<(XorO | undefined)[][]>([
    [undefined, undefined, undefined],
    [undefined, undefined, undefined],
    [undefined, undefined, undefined]
  ]);
  const [moveNo, setMoveNo] = useState(0);
  const isXNext = moveNo % 2 === 0;

  const handleClick = (rowNo: number, squareNo: number) => {
    setBoard((board) => {
      return board.map((row, k) => {
        return row.map((square, l) => {
          if (rowNo === k && squareNo === l && !square) {
            if (isXNext) {
              setMoveNo(moveNo + 1);
              return "X";
            } else {
              setMoveNo(moveNo + 1);
              return "O";
            }
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
