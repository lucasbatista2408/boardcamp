import connection from "../../../database.js";
import { queryPostGames } from "../../Queries/queries.js";


export default async function postGames(req, res){

  const {name, image, stockTotal, categoryId, pricePerDay} = req.body;

  try {

    const values = [name, image, stockTotal, categoryId, pricePerDay]

    await connection.query(queryPostGames, values);
    
    res.sendStatus(201);

  } catch (error) {

    console.error(error)
    
  }
}