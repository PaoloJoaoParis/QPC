import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const model = {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING(80),
    allowNull: false,
    unique: true,
  },
  created_by_player_id: {
    type: DataTypes.INTEGER,
    allowNull: true, // null si thème officiel
  },
  created_at: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  isDeleted: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
};

const Theme = sequelize.define("Theme", model, {
  tableName: "themes",
  timestamps: false,
  defaultScope: {
    where: { isDeleted: false },
  },
  scopes: {
    withDeleted: { where: {} },
  },
});

export default Theme;
