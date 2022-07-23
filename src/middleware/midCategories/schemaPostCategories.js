import joi from 'joi'


export default async function schemaPostCategories(req, res, next){

  const data = req.body;

  const schema = joi.object({
    name: joi.string().min(1).required(),
  })

  const {error} = schema.validate(data,{abortEarly: false});

  if (error) {
      return res.sendStatus(400);
  } 
    next();

}