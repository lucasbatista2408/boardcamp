import joi from 'joi'


export default async function schemaPostGames(req, res, next){

  const data = req.body;

  const schema = joi.object({
    name: joi.string().min(1).required(),
    image: joi.string().min(1).required(),
    stockTotal: joi.number().greater(0).required(),
    categoryId: joi.number().greater(0).required(),
    pricePerDay: joi.number().required(),
  })

  const {error} = schema.validate(data,{abortEarly: false});

  if (error) {
      return res.sendStatus(400);
  } 
  
  next();

}