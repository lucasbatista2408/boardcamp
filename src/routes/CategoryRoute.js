import { Router } from 'express'
import getCategories from '../controllers/Categories/getCategories.js';
import postCategories from '../controllers/Categories/postCategories.js';
import schemaPostCategories from '../middleware/midCategories/schemaPostCategories.js';
import existsCategory from '../middleware/midCategories/existsCategory.js';

const router = Router();

router.get("/categories", getCategories)

router.post("/categories", schemaPostCategories, existsCategory, postCategories)

export default router;