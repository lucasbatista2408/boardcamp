import { Router } from 'express'
import getGames from '../controllers/Games/getGames.js'
import postGames from '../controllers/Games/postGames.js'
import schemaPostGames from '../middleware/midGames/schemaPostGames.js';
import existsGame from '../middleware/midGames/existsGame.js';

const router = Router();

router.get("/games", getGames)

router.post("/games", schemaPostGames, existsGame, postGames)

export default router;