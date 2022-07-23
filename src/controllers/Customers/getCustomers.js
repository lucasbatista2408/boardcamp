import connection from "../../../database.js";


export default async function getCustomers(req, res){

  try{
    
    const query = "SELECT*FROM customers";
    
    const { rows: costumers} = await connection.query(query) // get categories of products
    console.log(costumers)

    res.send(costumers)
    
  }catch(err){
    console.error(err)
  }

}