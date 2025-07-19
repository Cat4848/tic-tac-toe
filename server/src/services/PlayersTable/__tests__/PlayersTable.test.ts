import PlayersTable from "../PlayersTable";
import db from "../../../databases/MySqlDatabase";
import { Player } from "../../../lib/types";

const playersTable = new PlayersTable(db);

test("if the players are retrieved correctly", async () => {
  expect.assertions(2);
  const result = await playersTable.getAll();
  expect(result.success).toBe(true);
  if (result.success) {
    const players: Player[] = JSON.parse(result.data);
    const firstPlayer = players[0];
    expect(firstPlayer).toHaveProperty("player_id");
  }
});
