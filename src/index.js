import express from 'express';
import configViewEnging from './configs/viewEngine';
import initWebRoute from './route/web';

require('dotenv').config();

const app = express()
const port = process.env.PORT;

//set up view engine
configViewEnging(app);

//init web route
initWebRoute(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})