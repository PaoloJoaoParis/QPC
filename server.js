import sequelize from "./config/database.js";
import Player from "./models/player.model.js"


await sequelize.sync({ force: true });
console.log('✅ Tables synchées');