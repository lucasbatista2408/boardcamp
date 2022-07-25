import connection from "../../../database.js";


export default async function existsGameById(req, res, next){

  const {gameId} = req.body;

  try{

    const query = "SELECT*FROM games WHERE id=$1"

    const value = [gameId]

    const exist = await connection.query(query, value) // get categories of products

    if(exist.rowCount > 0){
      next()
    } else {
      console.log('400-existsGameById')
      return res.sendStatus(400)
    }

  }catch(err){
    console.error(err)
    res.sendStatus(500)
  }

}