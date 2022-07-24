import connection from "../../../database.js";
import { queryExistsCustomersById } from "../../Queries/queries.js";

export default async function existsCustomersById(req,res,next){

  const id = req.params.id

  try {
    const values = [id]
  
    const {rowCount: checkId} = await connection.query(queryExistsCustomersById, values);

    checkId > 0 ? next() : res.sendStatus(404)

  } catch (error) {
    console.error(error)
  }

}