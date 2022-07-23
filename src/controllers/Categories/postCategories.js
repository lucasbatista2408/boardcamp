import connection from "../../../database.js";
import { queryPostCategories } from "../../Queries/queries.js";


export default async function postCategories(req, res){

  const {name} = req.body;

  try{

    const values = [name]

    await connection.query(queryPostCategories, values) // get categories of products
    res.sendStatus(201)
    
  }catch(err){
    console.error(err)
  }

}