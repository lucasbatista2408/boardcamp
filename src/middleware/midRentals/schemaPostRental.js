import joi from 'joi'


export default async function schemaPostRental(req, res, next){

  const data = req.body;

  const schema = joi.object({
    customerId: joi.number().min(1).required(),
    gameId: joi.number().min(1).required(),
    daysRented: joi.number().greater(0).required()
  })

  const {error} = schema.validate(data,{abortEarly: false});

  if (error) {
      return res.sendStatus(400);
  } 
  
  next();

}