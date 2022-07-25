import connection from "../../../database.js";
import { queryGetCategories } from "../../Queries/queries.js";

export default async function getCategories(req, res) {
  try {
    const { rows: categories } = await connection.query(queryGetCategories); // get categories of products

    res.send(categories);
  } catch (err) {
    console.error(err);
  }
}
