import connection from "../../../database.js";
import { querydeleteRental } from "../../Queries/queries.js";


export default async function deleteRental(req,res){

  const {id} = req.params

  try {
    await connection.query(querydeleteRental, [id])
    res.status(200)
  } catch (error) {
    console.error(error)
    res.sendStatus(500)
  }
  
}