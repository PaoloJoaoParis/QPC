import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const model = {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  label: {
    type: DataTypes.STRING(10),
    allowNull: false,
    unique: true, // easy | medium | hard
  },
  time_per_question_sec: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  created_at: {
    type: DataTypes.DATE,
    allowNull: false,
  },
};

const Difficulty = sequelize.define("Difficulty", model, {
  tableName: "difficulties",
  timestamps: false,
});

export default Difficulty;
