import sequelize from "./config/database.js";
import express from "express"
import { PlayerRepository } from "./repositories/index.js"

const app = express()
const port = 3000

app.use(express.json())


await sequelize.sync({ force: true });
console.log('✅ Tables synchées');

app.listen(port, () => {
    console.log(`server lauched at http://localhost:${port}`)
})

console.log(await PlayerRepository.createPlayer("zebi", 15))
const players = await PlayerRepository.getAllPlayers()

app.get("/api/v1/players", async (req, res) => {
    const players = await PlayerRepository.getAllPlayers()
    res.json(players)
})

app.get("/api/v1/players/:id", async (req, res) => {
    const { id } = req.params
    const players = await PlayerRepository.getPlayerById(id)
    res.json(players)
})

app.post("/api/v1/players/", async (req, res) => {
    try {
        const { pseudo, age } = req.body
        res.json(await PlayerRepository.createPlayer(pseudo, age))
    } catch (error) {
        res.json(error)
    }

})
