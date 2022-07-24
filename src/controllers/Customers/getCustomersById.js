import connection from "../../../database.js";
import { queryGetCustomersById } from "../../Queries/queries.js";



export default async function getCustomersById(req, res){

    const id = req.params.id

  try{

    const values = [id]

    const { rows: customer, rowCount: customerQtd} = await connection.query(queryGetCustomersById, values)

    (customerQtd > 0) ? res.send(customer) : res.sendStatus(404) 

  }catch(err){

    console.error(err)
    res.sendStatus(500)

  }

}