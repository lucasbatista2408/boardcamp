import { Router } from 'express'
import getCostumers from '../controllers/Customers/getCostumers.js';



const router = Router();

router.get('/customers', getCostumers)

export default router;