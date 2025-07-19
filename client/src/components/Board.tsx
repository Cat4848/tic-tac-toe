import React from "react";
import { SquareValue } from "../types";
import { v4 as uuid } from "uuid";

interface Props {
  board: SquareValue[][];
  handleClick: (rowNo: number, squareNo: number) => void;
}

const Board = ({ board, handleClick }: Props) => {
  return (
    <>
      {board.map((row, i) => (
        <div key={uuid()} className="flex gap-1">
          {row.map((square, j) => (
            <div
              key={uuid()}
              className={`
                border-2 border-gray-900 w-10 h-10 cursor-pointer 
                items-center justify-center text-2xl font-bold flex 
                shadow-md shadow-indigo-200 hover:bg-indigo-200`}
              onClick={() => handleClick(i, j)}
            >
              {square}
            </div>
          ))}
        </div>
      ))}
    </>
  );
};
export default Board;
