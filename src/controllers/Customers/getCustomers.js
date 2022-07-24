import connection from "../../../database.js";
import { queryGetCustomers } from "../../Queries/queries.js";


export default async function getCustomers(req, res){

  const cpf = req.query.cpf

  try{
    
    const { rows: costumers} = await connection.query(queryGetCustomers) // get categories of products

    if (cpf?.length > 0){

      const filterCustomers = costumers.filter((user) => user.cpf.startsWith(cpf));

      if(filterCustomers.length > 0){

        return res.send(filterCustomers)

      } else {
        return res.sendStatus(404)
      }
    }else{

      res.send(costumers)

    }

    
  }catch(err){
    console.error(err)
    res.sendStatus(500)
  }

}