  export const columnsJoinGames = 'games.id, games.name, games.image, games."stockTotal", games."categoryId", games."pricePerDay", categories.name AS "categoryName"'

  export const columnsPostCustomers = 'name, phone, cpf, birthday'

  export const queryGames = `SELECT ${columnsJoinGames} FROM games JOIN categories ON games."categoryId"=categories.Id;`

  export const queryGetCustomers = "SELECT*FROM customers";

  export const queryPostGames = 'INSERT INTO games (name, image, "stockTotal", "categoryId", "pricePerDay") VALUES ($1, $2, $3, $4, $5)'

  export const queryGetCategories = "SELECT*FROM categories"

  export const queryPostCategories = `INSERT INTO categories (name) VALUES ($1)`

  export const queryPostCustomers = `INSERT INTO customers (${columnsPostCustomers}) VALUES ($1,$2,$3,$4)`

  export const queryExistsCustomers = "SELECT*FROM customers WHERE cpf=$1"

  export const queryExistsCustomersById = "SELECT*FROM customers WHERE id=$1"

  export const queryGetCustomersById = 'SELECT*FROM customers WHERE id=$1'

  export const queryGetGamesById = 'SELECT * FROM games WHERE id=$1'

  export const queryInsertRental = 'INSERT INTO rentals ("customerId", "gameId", "rentDate", "daysRented", "returnDate", "originalPrice", "delayFee") VALUES ($1,$2,$3,$4,$5,$6,$7)'

  export const queryGetRentalById = 'SELECT*FROM rentals WHERE id=$1'

  export const queryGetRentals =`SELECT json_build_object(
    'id', rental.id,
    'customerId', "customerId",
    'gameId', "gameId",
    'rentDate', "rentDate",
    'daysRented', "daysRented",
    'returnDate', "returnDate",
    'OriginalPrice', "originalPrice",
    'delayFee', "delayFee",
    'customer', json_build_object(
        'id', customer.id,
        'name', customer.name
       ),
    'game',json_build_object(
        'id', game.id,
        'name', game.name,
        'categoryId', game."categoryId",
        'categoryName', category.name
       )
  )
  FROM rentals rental
  JOIN games game on game.id="gameId"
  JOIN customers customer on customer.id="customerId"
  JOIN categories category on category.id=game."categoryId"
  `
  export const queryGetRentalsByCustomer =`SELECT json_build_object(
    'id', rental.id,
    'customerId', rental."customerId",
    'gameId', "gameId",
    'rentDate', "rentDate",
    'daysRented', "daysRented",
    'returnDate', "returnDate",
    'OriginalPrice', "originalPrice",
    'delayFee', "delayFee",
    'customer', json_build_object(
        'id', customer.id,
        'name', customer.name
       ),
    'game',json_build_object(
        'id', game.id,
        'name', game.name,
        'categoryId', game."categoryId",
        'categoryName', category.name
       )
  )
  FROM rentals rental
  JOIN games game on game.id="gameId"
  JOIN customers customer on customer.id="customerId"
  JOIN categories category on category.id=game."categoryId"
  WHERE rental."customerId"= $1
  `
  export const queryGetRentalsByGame =`SELECT json_build_object(
    'id', rental.id,
    'customerId', rental."customerId",
    'gameId', "gameId",
    'rentDate', "rentDate",
    'daysRented', "daysRented",
    'returnDate', "returnDate",
    'OriginalPrice', "originalPrice",
    'delayFee', "delayFee",
    'customer', json_build_object(
        'id', customer.id,
        'name', customer.name
       ),
    'game',json_build_object(
        'id', game.id,
        'name', game.name,
        'categoryId', game."categoryId",
        'categoryName', category.name
       )
  )
  FROM rentals rental
  JOIN games game on game.id="gameId"
  JOIN customers customer on customer.id="customerId"
  JOIN categories category on category.id=game."categoryId"
  WHERE rental."gameId"= $1
  `
  export const queryUpdateRental = 'UPDATE rentals SET "returnDate" = $1, "delayFee" = $2 WHERE id = $3'

  export const querydeleteRental = 'DELETE FROM rentals WHERE id = $1'