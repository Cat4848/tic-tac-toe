import { Result } from "../ResultGenerator/ResultGenerator";

export interface Database {
  execute: <V = void>(sql: string, values?: V[]) => Promise<Result>;
}
