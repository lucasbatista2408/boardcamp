import connection from "../../../database.js";
import dayjs from "dayjs";
import { queryGetRentalById, queryUpdateRental } from "../../Queries/queries.js";



export default async function endRental(req,res){

  const id = req.params.id
  const valueId = [id]
    
  const {rows: rental} = await connection.query(queryGetRentalById, valueId);

  const {
    rentDate, 
    originalPrice: pricePerDay,
    daysRented} = rental[0];

  const returnDateToBe = dayjs().add(daysRented, 'days').format("MM-DD-YYYY");
  const returnDate = dayjs().format("MM-DD-YYYY")

  const delay = dayjs(returnDate).diff(dayjs(returnDateToBe), 'days')

  function calculateFee(delay, pricePerDay){
    if(delay > 0){
      const delayFee = delay * pricePerDay;
      return delayFee
    } else{
      const delayFee = 0;
      return delayFee
    }
  }

  try {

    const valuesUpdate = [returnDate, calculateFee(), id]
    
    const update = await connection.query(queryUpdateRental, valuesUpdate);
    
    res.sendStatus(200); 

  } catch (error) {
    console.error(error)
    res.sendStatus(500)
  }

}