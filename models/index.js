import Difficulty from "./difficulty.model.js";
import Game from "./game.model.js";
import Leaderboard from "./leaderboard.model.js";
import Player from "./player.model.js";
import Theme from "./theme.model.js";

// Theme creator
Theme.belongsTo(Player, {
  foreignKey: "created_by_player_id",
  as: "creator",
});
Player.hasMany(Theme, {
  foreignKey: "created_by_player_id",
});

// Games
Game.belongsTo(Player, { foreignKey: "player_id" });
Game.belongsTo(Theme, { foreignKey: "theme_id" });
Game.belongsTo(Difficulty, { foreignKey: "difficulty_id" });

Player.hasMany(Game, { foreignKey: "player_id" });
Theme.hasMany(Game, { foreignKey: "theme_id" });
Difficulty.hasMany(Game, { foreignKey: "difficulty_id" });

// Leaderboard
Leaderboard.belongsTo(Player, { foreignKey: "player_id" });
Leaderboard.belongsTo(Theme, { foreignKey: "theme_id" });
Leaderboard.belongsTo(Difficulty, { foreignKey: "difficulty_id" });

export { Difficulty, Game, Leaderboard, Player, Theme };
