import connection from "../../../database.js";
import { queryPostCustomers } from "../../Queries/queries.js";

export default async function postCustomers(req, res){

  const {name, phone, cpf, birthday} = req.body;

  try{
    
    const values = [name, phone, cpf, birthday]

    await connection.query(queryPostCustomers, values) // get categories of products
    res.sendStatus(201)

  }catch(err){
    console.error(err)
  }

}