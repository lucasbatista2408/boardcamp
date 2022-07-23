import connection from "../../../database.js";


export default async function postGames(req, res){

  const {name, image, stockTotal, categoryId, pricePerDay} = req.body;

  try {
    const query = 'INSERT INTO games (name, image, "stockTotal", "categoryId", "pricePerDay") VALUES ($1, $2, $3, $4, $5)'

    const values = [name, image, stockTotal, categoryId, pricePerDay]

    await connection.query(query, values);
    
    res.sendStatus(201);

  } catch (error) {
    console.error(error)
  }
}