import sequelize from "./src/config/database.js";
import express from "express"
import { PlayerRoute, ApiRoute} from "./src/routes/index.js";
import {errorHandler} from "./src/middlewares/errorHandler.js"

const app = express()
const port = 3000


app.use(express.static("public"));
app.use(express.json());

await sequelize.sync({ force: true });
console.log('Tables synchées');


app.use("/",ApiRoute.router);
app.use("/api/v1/players",PlayerRoute.router)

app.use(errorHandler)



app.listen(port, () => {
    console.log(`server lauched at http://localhost:${port}`)
})

