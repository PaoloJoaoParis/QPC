import { Player } from "../models/index.js"


export async function createPlayer(pseudo, age) {
    return await Player.create({pseudo, age})
}

export async function getPlayerById(id) {
    const player = await Player.findByPK(id)
    if (!player) return null
    return player
}