import React from "react";
import { Player } from "../lib/types";

interface Props {
  players: Player[];
}

const ScoreBoard = ({ players }: Props) => {
  const sortedPlayers = players.sort((a, b) => b.score - a.score);
  return (
    <div className="flex flex-col justify-center items-center gap-4 border-2 border-gray-900 p-4 rounded-md">
      <div className="flex justify-between items-center gap-4">
        <div>🍀</div>
        <div className="font-bold text-xl">Leader Board</div>
      </div>
      {sortedPlayers.map((player, i) => (
        <div
          className={`${
            i === 0 && "font-bold"
          } flex justify-between w-full items-start gap-4 border-b-2 border-indigo-600`}
        >
          <div>{player.name}</div>
          <div>{player.score}</div>
        </div>
      ))}
    </div>
  );
};
export default ScoreBoard;
