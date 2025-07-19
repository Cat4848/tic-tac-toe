import React, { useEffect, useState } from "react";
import { Player, SquareValue } from "../lib/types";
import { v4 as uuid } from "uuid";
import isWinnerOnRows from "./utils/isWinnerOnRows/isWinnerOnRows";
import flipBoard from "./utils/flipBoard/flipBoard";
import { isWinnerOnDiag } from "./utils/isWinnerOnDiag/isWinnerOnDiag";
import { toast } from "react-toastify";
import { buildBoard } from "./utils/general/general";
import SelectBoardSize from "./SelectBoardSize";
import { usePlayers } from "../hooks/usePlayers";
import ScoreBoard from "./ScoreBoard";

const Game = () => {
  const fetchAllPlayersUrl = "/players";
  const { players, setPlayers } = usePlayers(fetchAllPlayersUrl);
  const [isBoardSizeSelected, setIsBoardSizeSelected] = useState(false);
  const [boardSize, setBoardSize] = useState<number>(3);
  const [board, setBoard] = useState<SquareValue[][]>(buildBoard(boardSize));
  const [moveNo, setMoveNo] = useState(0);
  const playerIndex = moveNo % 2;
  const isXNext = playerIndex === 0;
  const player = players[playerIndex];

  useEffect(() => {
    const itWon = isWinner();
    if (itWon) {
      const winningPlayer = players[(moveNo - 1) % 2];
      editScore(winningPlayer);
      updatePlayers(winningPlayer);
      toast.success(`${winningPlayer.name} wins! 🥳🤩`);
      setTimeout(() => {
        setBoard(buildBoard(boardSize));
      }, 1500);
    }
  }, [moveNo]);

  const editScore = async (player: Player) => {
    try {
      const res = await fetch("/players/editScore", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          player_id: player.player_id,
          score: player.score + 1
        })
      });
      if (!res.ok) {
        const errorMessage = await res.text();
        toast.error(errorMessage);
      }
    } catch (e) {
      if (e instanceof Error) {
        toast.error(e.message);
      } else {
        toast.error(e);
      }
    }
  };

  const updatePlayers = (winningPlayer: Player) => {
    const newPlayers = players.map((player) => {
      if (player.player_id === winningPlayer.player_id) {
        const updatedPlayer: Player = {
          ...player,
          score: player.score + 1
        };
        return updatedPlayer;
      } else {
        return player;
      }
    });
    setPlayers(newPlayers);
  };

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
    setBoard(buildBoard(sizeNo));
    setIsBoardSizeSelected(true);
  };

  return (
    <div className="flex flex-col mt-10 items-center gap-10">
      <div className="font-bold text-2xl">Tic Tac Toe</div>
      <div className="flex mt-10 items-center justify-evenly w-full gap-10">
        <ScoreBoard players={players} />
        <SelectBoardSize onSelectBoardSize={handleSelectBoardSize} />
      </div>
      {isBoardSizeSelected && (
        <div className="font-bold text-2xl">{`It's ${player.name}'s turn 🕣`}</div>
      )}
      <div className="flex flex-col gap-1 mt-2">
        {isBoardSizeSelected &&
          board.map((row, i) => (
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
      </div>
    </div>
  );
};

export default Game;
