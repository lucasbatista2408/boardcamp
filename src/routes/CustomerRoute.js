import { Router } from 'express'
import getCustomers from '../controllers/Customers/getCustomers.js';
import postCustomers from '../controllers/Customers/postCustomers.js';
import schemaCustomers from '../middleware/midCustomers/schemaCustomers.js';
import existsCustomers from '../middleware/midCustomers/existsCustomers.js';


const router = Router();

router.get('/customers', getCustomers)
router.get('/customers/:id') //TO-DO
router.post('/customers', existsCustomers, schemaCustomers, postCustomers)

export default router;