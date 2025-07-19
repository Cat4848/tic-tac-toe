import express from "express";
import session from "express-session";
import PlayersTable from "./services/PlayersTable/PlayersTable";
import db from "./databases/MySqlDatabase";

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

app.get("/players", async (req, res) => {
  try {
    const playersTable = new PlayersTable(db);
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

app.get("*", async (req, res) => {
  res.send("Not Found");
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () =>
  console.log(
    `server listening on PORT: ${PORT} and env: ${process.env.NODE_ENV}`
  )
);
