import { useEffect, useState } from "react";
import { Player } from "../lib/types";
import { toast } from "react-toastify";

export const usePlayers = (url: string) => {
  const [players, setPlayers] = useState<Player[]>([]);
  useEffect(() => {
    fetchPlayers(url).then(
      (players) => setPlayers(players),
      (error: Error) => {
        toast.error(error.message);
      }
    );
  }, [url]);
  return players;
};

const fetchPlayers = (url: string) => {
  return new Promise<Player[]>(async (resolve, reject) => {
    try {
      const res = await fetch(url);
      if (res.ok) {
        const players: Player[] = await res.json();
        resolve(players);
      } else {
        const errorMessage = await res.text();
        reject(new Error(errorMessage));
      }
    } catch (e) {
      if (e instanceof Error) {
        reject(e);
      } else {
        reject(new Error(JSON.stringify(e)));
      }
    }
  });
};
