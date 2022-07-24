import connection from "../../../database.js";


export default async function updateCustomersById(req,res){

  const {name, phone, cpf, birthday} = req.body;
  const id = req.params.id;

  const values = [name, phone,cpf, birthday, id]

  const queryUpdateCustomer = 'UPDATE customers SET name = $1, phone = $2, cpf = $3, birthday = $4 WHERE id = $5'

  try {

    await connection.query(queryUpdateCustomer, values)

    res.sendStatus(200)

  } catch (error) {
    console.log(error)
    res.sendStatus(500)  
  }

}