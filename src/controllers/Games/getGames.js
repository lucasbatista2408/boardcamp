import connection from "../../../database.js";
import { queryGames } from '../../Queries/queries.js'


export default async function getCategories(req, res){

    const gameName = req.query.name

  try{

    const { rows: games} = await connection.query(queryGames) // get categories of products

    if(gameName?.length > 0){

      const filterGames = games.filter((game) => game.name.toLowerCase().startsWith(gameName.toLowerCase()))

      if(filterGames.length > 0){

        return res.send(filterGames)

      } else {
        return res.sendStatus(404)
      }

    } else{

      res.send(games)

    }

  }catch(err){

    console.error(err)

  }

}