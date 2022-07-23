import connection from "../../../database.js";


export default async function existsGame(req, res, next){

  const {name} = req.body;
  console.log(name)

  try{

    const query = "SELECT*FROM games WHERE name=$1"

    const value = [name]

    const exist = await connection.query(query, value) // get categories of products

    if(exist.rowCount > 0){
      return res.sendStatus(409)
    }

  }catch(err){
    console.error(err)
  }

  next()
}