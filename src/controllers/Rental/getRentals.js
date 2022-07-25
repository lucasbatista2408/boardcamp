import connection from "../../../database.js";
import { 
  queryGetRentalsByGame,
  queryGetRentalsByCustomer, 
  queryGetRentals } from "../../Queries/queries.js";


export default async function getRentals(req,res){

  const {customerId, gameId} = req.query;
  
  const valueCustomer = [customerId]
  const valueGame = [gameId]

  const {rows: rentals} = await connection.query(queryGetRentals)

  if(customerId?.length > 0){

    try {
      console.log(valueCustomer)
      const {rows: rentalsCostumer, rowCount: exists} = await connection.query(queryGetRentalsByCustomer, valueCustomer)
      console.log(exists)

      if(exists > 0){
        res.send(rentalsCostumer)
      } else{
        res.sendStatus(404)
      }

    } catch (error) {
      console.log(error)
      res.sendStatus(500)
    }
  } else if(gameId?.length > 0){

    try {
      const {rows: rentalsGame, rowCount: exists} = await connection.query(queryGetRentalsByGame, valueGame)

      if(exists > 0){
        res.send(rentalsGame)
      } else{
        res.sendStatus(404)
      }

    } catch (error) {
      console.log(error)
      res.sendStatus(500)
    }
  } else {
    res.send(rentals)
  }

}
