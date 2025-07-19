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