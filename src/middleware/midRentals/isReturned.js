import connection from "../../../database.js";
import { queryGetRentalById } from "../../Queries/queries.js";



export default async function isReturned(req,res,next){

  const id = req.params.id
  const valueId = [id]

  const {rows: returned} = await connection.query(queryGetRentalById, valueId)
  console.log(returned)

  const {returnDate} = returned[0]
  console.log(returnDate)

  if(returnDate === null){
    next()
  } else{
    res.sendStatus(400)
  }
}