import { Router } from 'express'
import postRental from '../controllers/Rental/postRental.js';
import existsCustomerById from '../middleware/midRentals/existsCustomerById.js';
import existsGameById from '../middleware/midRentals/existsGameById.js';
import isGameAvailable from '../middleware/midRentals/isGameAvailable.js';
import schemaPostRental from '../middleware/midRentals/schemaPostRental.js';
import getRentals from '../controllers/Rental/getRentals.js';
import endRental from '../controllers/Rental/endRental.js';
import existsRentalById from '../middleware/midRentals/existsRentalById.js';
import isReturned from '../middleware/midRentals/isReturned.js';
import isReturnedDelete from '../middleware/midRentals/isReturnedDelete.js';
import deleteRental from '../controllers/Rental/deleteRental.js';


const router = Router ();

//POST NEW GAME RENT
router.post('/rentals', schemaPostRental, existsCustomerById, existsGameById, isGameAvailable, postRental)

// END A RENTAL
router.post('/rentals/:id/return', existsRentalById, isReturned, endRental)

// GET RENTS
router.get('/rentals', getRentals)

// DELETE A RENT
router.delete('/rentals/:id', existsRentalById, isReturnedDelete, deleteRental)



export default router