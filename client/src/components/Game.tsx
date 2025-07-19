import React, { useEffect, useState } from "react";
import { Player, SquareValue } from "../types";
import isWinnerOnRows from "./utils/isWinnerOnRows/isWinnerOnRows";
import flipBoard from "./utils/flipBoard/flipBoard";
import { isWinnerOnDiag } from "./utils/isWinnerOnDiag/isWinnerOnDiag";
import { toast } from "react-toastify";
import { buildBoard } from "./utils/general/general";
import SelectBoardSize from "./SelectBoardSize";
import { usePlayers } from "../hooks/usePlayers";
import ScoreBoard from "./ScoreBoard";
import Board from "./Board";

const Game = () => {
  const fetchAllPlayersUrl = "/players";
  const { players, setPlayers } = usePlayers(fetchAllPlayersUrl);
  const [isBoardSizeSelected, setIsBoardSizeSelected] = useState(false);
  const [boardSize, setBoardSize] = useState<number>(3);
  const [board, setBoard] = useState<SquareValue[][]>(buildBoard(boardSize));
  const [moveNo, setMoveNo] = useState(0);
  const playerIndex = moveNo % 2;
  const isXNext = playerIndex === 0;
  const activePlayer = players[playerIndex];

  useEffect(() => {
    const playerWon = isWinner();
    if (playerWon) {
      const winningPlayer = players[(moveNo - 1) % 2];
      editScore(winningPlayer);
      updatePlayers(winningPlayer);
      toast.success(`${winningPlayer.name} wins! 🥳🤩`);
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

  const handleSelectBoardSize = (size: string) => {
    const sizeNo = Number(size);
    setBoardSize(sizeNo);
    setBoard(buildBoard(sizeNo));
    setIsBoardSizeSelected(true);
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
      <div className="flex mt-10 items-center justify-evenly w-full gap-10">
        <ScoreBoard players={players} />
        <SelectBoardSize onSelectBoardSize={handleSelectBoardSize} />
      </div>
      {isBoardSizeSelected && (
        <div className="font-bold text-2xl">{`It's ${activePlayer.name}'s turn 🕣`}</div>
      )}
      <div className="flex flex-col gap-1 mt-2">
        {isBoardSizeSelected && (
          <Board board={board} handleClick={handleClick} />
        )}
      </div>
    </div>
  );
};

export default Game;
