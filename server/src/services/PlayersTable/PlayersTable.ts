import { Database } from "../../lib/types";

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
}
