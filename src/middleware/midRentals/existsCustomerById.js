import connection from "../../../database.js";


export default async function existsCustomerById(req, res, next){

  const {customerId} = req.body;

  try{

    const query = "SELECT*FROM customers WHERE id=$1"

    const value = [customerId]

    const exist = await connection.query(query, value) // get categories of products

    if(exist.rowCount > 0){
      next()
    } else{
      console.log('400-existsCustomerById')
      return res.sendStatus(400)
    }

  }catch(err){
    console.error(err)
    res.sendStatus(500)
  }
  
}