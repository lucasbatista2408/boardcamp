import joi from 'joi'

export default function schemaCustomers(req,res,next){

  const {name, phone, cpf, birthday} = req.body;
  const user = {name, phone, cpf, birthday}
  console.log('entrei no schema')

  const schema = joi.object({
    name: joi.string().min(1).required(),
    phone: joi.string().min(10).max(11).required(),
    cpf: joi.string().min(11).max(11).required(),
    birthday: joi.date()
  })

  const {error} = schema.validate(user,{abortEarly: false});

  if (error) {
    return res.sendStatus(400);
  }

  next()
  
}