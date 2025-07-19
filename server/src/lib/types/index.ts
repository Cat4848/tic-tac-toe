import { Result } from "../ResultGenerator/ResultGenerator";

export interface Database {
  execute: <V = void>(sql: string, values?: V[]) => Promise<Result>;
}

export interface Player {
  player_id: number;
  name: string;
  score: number;
}
