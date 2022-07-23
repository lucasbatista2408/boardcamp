import connection from "../../../database.js";


export default async function getCategories(req, res){

  try{
    const { rows: categories} = await connection.query('SELECT*FROM categories') // get categories of products
    res.send(categories)
  }catch(err){
    console.error(err)
  }

}