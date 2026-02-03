import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const model = {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  theme_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  difficulty_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  player_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  total_points: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  games_played: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  best_score: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  updated_at: {
    type: DataTypes.DATE,
    allowNull: false,
  },
};

const Leaderboard = sequelize.define("Leaderboard", model, {
  tableName: "leaderboards",
  timestamps: false,
});

export default Leaderboard;
