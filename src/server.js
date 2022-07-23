import express from 'express'
import cors from 'cors'
import CategoryRoute from '../src/routes/CategoryRoute.js'
import GameRoute from '../src/routes/GameRoute.js'
import dotenv from 'dotenv'
import CostumerRoute from '../src/routes/CustomerRoute.js'

const app = express();
const PORT = process.env.PORT || 5000;
app.use(express.json());
app.use(cors());
dotenv.config();

//ROUTES
app.use(CategoryRoute);
app.use(GameRoute);
app.use(CostumerRoute);





app.listen(PORT, () => {
  console.log(`SERVER ON PORT ${PORT}`)
})