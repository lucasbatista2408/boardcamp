import connection from "../../../database.js";


export default async function postCategories(req, res){

  const {name} = req.body;

  try{
    await connection.query(`INSERT INTO categories (name) VALUES ('${name}')`) // get categories of products
    res.sendStatus(201)
  }catch(err){
    console.error(err)
  }

}