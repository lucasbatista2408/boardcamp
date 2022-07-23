  export const columnsJoinGames = 'games.id, games.name, games.image, games."stockTotal", games."categoryId", games."pricePerDay", categories.name AS "categoryName"'

  export const columnsPostCustomers = 'name, phone, cpf, birthday'

  export const queryGames = `SELECT ${columnsJoinGames} FROM games JOIN categories ON games."categoryId"=categories.Id;`

  export const queryPostGames = 'INSERT INTO games (name, image, "stockTotal", "categoryId", "pricePerDay") VALUES ($1, $2, $3, $4, $5)'

  export const queryGetCategories = "SELECT*FROM categories"

  export const queryPostCategories = `INSERT INTO categories (name) VALUES ($1)`

  export const queryPostCustomers = `INSERT INTO customers (${columnsPostCustomers}) VALUES ($1,$2,$3,$4)`

  export const queryExistsCustomers = "SELECT*FROM customers WHERE cpf=$1"