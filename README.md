# Tic-Tac-Toe

The below problems are to allow us a glimpse into your problem solving ability, style and current skill set. Please do problem 1, and optionally problem 2 or 3 depending on where you are most comfortable. We expect this test to take 2-3 hours, if you find yourself spending more than this do not aim to solve all 3 problems! We will not be judging based on number of problems completed only the style and thought process.

## Problems

### Problem 1

We have started a basic game of Tic-Tac-Toe as outlined [here](https://en.wikipedia.org/wiki/Tic-tac-toe) but we don't have anyone good enough to code to finish it!

- Please implement a complete basic game of Tic-Tac-Toe
- Please use React and TypeScript throughout, if you know TailwindCSS please expand on what is already provided, otherwise it is fine to use raw styling
- Both players will play out of the same application, it is sufficient to just switch the current player each time a move is played
- Once a game is completed, I should be able to start another game

### Problem 2

We are bored with the basic game now, can you make it so the board can be scaled to any size?

- Add some kind of input which allows me to change the board size
- The board size should be a number between 3 and 15

### Problem 3

We want to store game results in a database.

- create a simple backend server (using a simple generator provided by your IDE is fine)

- use any SQL/noSQL database to store the results
- return simple stats back to the front-end: number of win/losses for each player.

Simplification for the task:

- do not use database migration tools, just an SQL or other script to create tables is fine
- add comments about what you were thinking about but didn’t implement because of restrictions
- host the project on your local machine, optional hosting in a public place is fine
- optionally create a Dockerfile to build both back-end and front-end. Do not create any deployment scripts, if it's not necessary.
- optional tests are welcome

## Quickstart

- Make sure you have **node** installed
- `cd client`
- `npm i`
- `npm start`

# Edited by Catalin

## How to build and start the project

- `touch server/.env`
- add the following 2 environmental variables:

```plaintext
DB_URL=mysql://[your-user-name]:[your-password]@localhost:3306/tic_tac_toe_game
SESSION_SECRET=4b0d432e400f09573de6c96b916ac6a3ae0ca6c3cfd83cb370b0152fc54dd845fc233b6381238e0981f1df97d189690c6dbc0afad59e5c46ed575cc64bf009dc
```

- paste the following SQL code into your **Database Client** of choice

```sql
CREATE DATABASE IF NOT EXISTS tic_tac_toe_game;
USE tic_tac_toe_game;

CREATE TABLE IF NOT EXISTS players (
  player_id INT UNSIGNED NOT NULL AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  score INT UNSIGNED NOT NULL DEFAULT 0,
  PRIMARY KEY (player_id)
);

INSERT INTO players (name) VALUES ('Nick');
INSERT INTO players (name) VALUES ('Catalin');
```

- `cd client && npm i`
- `npm run build`
- `cd ..`
- `cd server && npm i`
- `npm run start`
- [start-app](http://localhost:4000/) in your browser
- enjoy playing 😀

## Testing the application

I built test for both frontend and backend

- run frontend tests: from the **client** directory run `npm run test`;
- run backend test: from the **server** directory run `npm run test`.

## Things that I would do if I had more time

- players' option to add their own name;
- before a new game starts the option for the players to chose if they want to use **X** or **O**;
- players to chose which one begins first on a new game;
- now we only have 2 players: **Nick** and **Catalin**; if we would have more players in the database, I will ask the players to select who they are from the list of all players. When I know who will play, I create an array with just those 2 players and use the same `moveNo % 2` logic to circulate between the players's turns.

### Testing

- mock the `PlayersTable` service so that I won't interact with the database directly;
- more testing on the diagonal extraction (i.e. on a 5x5 board and combine left to right and right to left diagonal extraction logic).

### Bugs

- after a player wins, there's a short 1.5-second delay before the board resets. If both players are about to win at the same time—like filling two rows or columns side by side—only one will be recognized first. But if you manage to click the last square in that small window of time, both players can win together!

### Development

- a shared types package between frontend and backend to enhance DRY code;
- loading UI spinner for async operations like fetch users or post user's score;
- right now, every time someone clicks on a square to place an **X** or **O**, I check if there's a winner. But this could be improved! Since it's impossible for anyone to win before making at least `boardSize - 1` moves, I could wait until then to start checking. That way, I avoid calling the more expensive `isWinner` function when there's no chance of a win yet.
