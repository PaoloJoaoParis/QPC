import sequelize from "./config/database.js";
import express from "express"

const app = express()
const port = 3000


await sequelize.sync({ force: true });
console.log('✅ Tables synchées');

app.listen(port, () => {
    console.log(`server lauched at http://localhost:${port}`)
})

app.get("/api/v1/player", () => {
    
})
