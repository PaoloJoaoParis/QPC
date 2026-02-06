import { DifficultyRepository } from "../repositories/index.js";
import { DifficultyService } from "../services";

export async function getAllDifficulty (req,res,next){
    try{
        const difficulties = await DifficultyService.getAllDifficulty();
        res.json(difficulties)
    }catch(error){
        next(error)
    }
}

export async function getDifficultyById(req,res,next){
    try{
        const difficulty = await DifficultyRepository.getDifficultyById(req.params.id);
        res.json(difficulty)
    }catch(error){
        next(error)
    }
}