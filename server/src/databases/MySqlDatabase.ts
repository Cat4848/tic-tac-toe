import mysql from "mysql2/promise";
import { ResultGenerator } from "../lib/ResultGenerator/ResultGenerator";
import { Database } from "../lib/types";
import "dotenv/config";

class MySqlDatabase implements Database {
  private pool: mysql.Pool;

  constructor(uri: string) {
    this.pool = mysql.createPool({ uri: uri, connectionLimit: 8 });
  }

  private async getConnection() {
    return this.pool.getConnection();
  }

  public async execute<V>(sql: string, values: V[] = []) {
    const connection = await this.getConnection();
    const resultGenerator = new ResultGenerator();
    try {
      const [rows] = await connection.execute(sql, values);
      const success = resultGenerator.generateSuccess(JSON.stringify(rows));
      return success;
    } catch (e) {
      const error = resultGenerator.generateError(e);
      return error;
    } finally {
      connection.release();
    }
  }
}

const db = new MySqlDatabase(process.env.DB_URL || "DB_URL is missing ");

export default db;
