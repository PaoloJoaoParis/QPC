import sequelize from "./config/database.js";
import Player from "./models/players.model.js"


await sequelize.sync({ force: true });
console.log('✅ Tables synchées');