import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const model = {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  player_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  theme_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  difficulty_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  question_count: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  start_lives: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  lives_lost: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  score: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  finished_reason: {
    type: DataTypes.STRING(20),
    allowNull: false, // completed | no_lives | abandoned
  },
  started_at: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  ended_at: {
    type: DataTypes.DATE,
    allowNull: true,
  },
};

const Game = sequelize.define("Game", model, {
  tableName: "games",
  timestamps: false,
});

export default Game;
