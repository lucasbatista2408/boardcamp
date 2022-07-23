import connection from "../../../database.js";


export default async function getCategories(req, res){

  try{
    
    const query = "SELECT*FROM games";
    
    const { rows: games} = await connection.query(query) // get categories of products

    res.send(games)
  }catch(err){
    console.error(err)
  }

}