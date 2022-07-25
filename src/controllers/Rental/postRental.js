import connection from "../../../database.js";
import dayjs from "dayjs";
import { queryInsertRental, queryGetGamesById } from "../../Queries/queries.js";


export default async function postRental(req,res){

  const {customerId, gameId, daysRented} = req.body

  const valueGame = [gameId]

  const {rows: game} = await connection.query(queryGetGamesById, valueGame)
  const {pricePerDay} = game[0];

  const rentDate = dayjs().format("MM-DD-YYYY")
  const returnDate = null;
  const delayFee = null;
  const originalPrice = daysRented * pricePerDay;

  
  if(daysRented > 0){

    try {
      
      const valuesInsert = [customerId, gameId, rentDate, daysRented, returnDate, originalPrice, delayFee]

      await connection.query(queryInsertRental, valuesInsert)

      res.sendStatus(201)

    } catch (error) {

      console.log(error)
      res.sendStatus(500)

    }

  } else{

    res.sendStatus(400)

  }

}