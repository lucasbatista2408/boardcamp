import connection from "../../../database.js";
import { queryExistsCustomers } from "../../Queries/queries.js";

export default async function existsCustomers(req,res,next){

  const {cpf} = req.body

  try {
    const values = [cpf]
  
    const {rowCount: checkCPF} = await connection.query(queryExistsCustomers, values);

    checkCPF > 0 ? res.sendStatus(409) : next()

  } catch (error) {
    console.error(error)
  }

}