import express from "express";
import session from "express-session";
import PlayersTable from "./services/PlayersTable/PlayersTable";
import db from "./databases/MySqlDatabase";
import { ValidationError } from "yup";
import { editScorePayloadValidation } from "./lib/validators/validateEditScore/validateEditScore";

const app = express();

app.use(express.static("src/public"));

app.use(
  session({
    secret: process.env.SESSION_SECRET!,
    resave: true,
    saveUninitialized: true
  })
);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/dist/index.html");
});

const playersTable = new PlayersTable(db);

app.get("/players", async (req, res) => {
  try {
    const result = await playersTable.getAll();
    if (result.success) {
      res.send(result.data);
      return;
    } else {
      throw result.error;
    }
  } catch (e) {
    if (e instanceof Error) {
      res.status(500).send(e.message);
      return;
    }
    res.status(500).send(JSON.stringify(e));
    return;
  }
});

app.post("/players/editScore", async (req, res) => {
  try {
    const { player_id, score } = await editScorePayloadValidation(req.body);
    const result = await playersTable.editScore(player_id, score);
    if (result.success) {
      res.sendStatus(200);
      return;
    } else {
      throw result.error;
    }
  } catch (e) {
    if (e instanceof ValidationError) {
      res.status(400).send(e.errors[0]);
      return;
    }
    if (e instanceof Error) {
      res.status(500).send(e.message);
      return;
    }
    res.status(500).send(e);
    return;
  }
});

app.get("*", async (req, res) => {
  res.send("Not Found");
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`server listening on PORT: ${PORT}`));
