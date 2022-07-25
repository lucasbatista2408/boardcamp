import connection from "../../../database.js";
import { queryGetGamesById } from "../../Queries/queries.js";
import { queryGetRentalById } from "../../Queries/queries.js";


export default async function isGameAvailable(req, res, next){

  const {gameId} = req.body;

  const valueGameId = [gameId]

  ///////////////////////////////////// GETS TOTAL STOCK OF A GAME

  const {rows: game} = await connection.query(queryGetGamesById, valueGameId)

  const {stockTotal} = game[0];

  ///////////////////////////////////// GETS THE TOTAL NUMBER OF TIMES THE GAME HAS BEEN RENTED

  const {rowCount: rentals} = connection.query(queryGetRentalById, valueGameId)

  //////////////////////////////////// CHECKS IF THE GAME CAN STILL BE RENTED

  try {

    if(rentals >= stockTotal){
      res.sendStatus(400)
    } else {
      next()
    }
    
  } catch (error) {
    console.log(error)
    res.sendStatus(500)
  }
  
}