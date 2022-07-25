import connection from "../../../database.js";
import { queryGetRentalById } from "../../Queries/queries.js";



export default async function existsRentalById(req,res,next){

  const id = req.params.id
  const valueId = [id]

  const {rowCount: exists} = await connection.query(queryGetRentalById, valueId)

  try {
    if(exists > 0){
      next()
    } else {
      res.sendStatus(404)
    }
    
  } catch (error) {
    console.error(error)
    res.sendStatus(500)
  }

}