import { Router } from 'express'
import getCustomers from '../controllers/Customers/getCustomers.js';
import postCustomers from '../controllers/Customers/postCustomers.js';
import schemaCustomers from '../middleware/midCustomers/schemaCustomers.js';
import existsCustomers from '../middleware/midCustomers/existsCustomers.js';
import getCustomersById from '../controllers/Customers/getCustomersById.js';
import updateCustomersById from '../controllers/Customers/updateCustomersById.js';
import existsCustomersById from '../middleware/midCustomers/existsCustomersById.js';


const router = Router();

// shows customers in general and filtered by query string
router.get('/customers', getCustomers)

// shows customers filtered by Id
router.get('/customers/:id', getCustomersById)

// updates a customers info by its Id
router.put('/customers/:id', schemaCustomers, existsCustomersById, updateCustomersById)

// creates a new customer
router.post('/customers', schemaCustomers, existsCustomers, postCustomers)

export default router;