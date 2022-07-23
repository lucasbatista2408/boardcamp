import connection from "../../../database.js";


export default async function existsCategory(req, res, next){

  const {name} = req.body;
  console.log(name)
  try{

    const exist = await connection.query(`SELECT*FROM categories WHERE name= '${name}'`) // get categories of products
    console.log(exist)

    if(exist.rowCount > 0){
      return res.sendStatus(409)
    }

  }catch(err){
    console.error(err)
  }

  next()
}