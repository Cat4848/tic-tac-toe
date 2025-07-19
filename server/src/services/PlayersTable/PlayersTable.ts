import { Database, Player } from "../../lib/types";

export default class PlayersTable {
  private db: Database;

  constructor(db: Database) {
    this.db = db;
  }

  getAll = async () => {
    const sql = "SELECT * FROM players;";
    const result = await this.db.execute(sql);
    return result;
  };

  editScore = async (player: Player, score: number) => {
    const sql = `UPDATE players SET score = ? WHERE player_id = ?;`;
    const result = await this.db.execute(sql, [score, player.player_id]);
    return result;
  };
}
