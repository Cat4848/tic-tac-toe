export type SquareValue = "X" | "O" | undefined;

export interface Player {
  player_id: number;
  name: string;
  score: number;
}
