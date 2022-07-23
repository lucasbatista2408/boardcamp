import connection from "../../../database.js";


export default async function getCostumers(req, res){

  try{
    
    const query = "SELECT*FROM costumers";
    
    const { rows: costumers} = await connection.query(query) // get categories of products

    res.send(costumers)
    
  }catch(err){
    console.error(err)
  }

}