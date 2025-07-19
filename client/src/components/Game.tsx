import React, { useEffect, useState } from "react";
import { SquareValue } from "../lib/types";
import { v4 as uuid } from "uuid";
import isWinnerOnRows from "./utils/isWinnerOnRows/isWinnerOnRows";
import flipBoard from "./utils/flipBoard/flipBoard";
import { isWinnerOnDiag } from "./utils/isWinnerOnDiag/isWinnerOnDiag";
import { toast } from "react-toastify";
import { buildBoard } from "./utils/general/general";
import SelectBoardSize from "./SelectBoardSize";
import { usePlayers } from "../hooks/usePlayers";

const Game = () => {
  const [isBoardSizeSelected, setIsBoardSizeSelected] = useState(false);
  const [boardSize, setBoardSize] = useState<number>(3);
  const [board, setBoard] = useState<SquareValue[][]>(buildBoard(boardSize));
  const [moveNo, setMoveNo] = useState(0);
  const isXNext = moveNo % 2 === 0;
  const player = `${isXNext ? "Nick" : "Catalin"}`;
  const fetchAllPlayersUrl = "/players";
  const players = usePlayers(fetchAllPlayersUrl);
  console.log("players", players);

  useEffect(() => {
    const itWon = isWinner();
    if (itWon) {
      toast.success("You won!");
      setTimeout(() => {
        setBoard(buildBoard(boardSize));
      }, 1500);
    }
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

  const handleSelectBoardSize = (size: string) => {
    const sizeNo = Number(size);
    setBoardSize(sizeNo);
    setIsBoardSizeSelected(true);
    setBoard(buildBoard(sizeNo));
  };

  return (
    <div className="flex flex-col mt-10 items-center gap-10">
      <div className="font-bold text-2xl">Tic Tac Toe</div>
      <SelectBoardSize onSelectBoardSize={handleSelectBoardSize} />
      {isBoardSizeSelected && (
        <div className="font-bold text-2xl">{`It's ${player}'s turn 🕣`}</div>
      )}
      <div className="flex flex-col gap-1 mt-2">
        {isBoardSizeSelected &&
          board.map((row, i) => (
            <div key={uuid()} className="flex gap-1">
              {row.map((square, j) => (
                <div
                  key={uuid()}
                  className="border-2 border-gray-900 w-10 h-10 cursor-pointer items-center justify-center text-2xl font-bold flex shadow-md shadow-indigo-200"
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
