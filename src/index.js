import express from 'express';
import configViewEnging from './configs/viewEngine';
require('dotenv').config();

const app = express()
const port = process.env.PORT;

configViewEnging(app);
app.get('/', (req, res) => {
  res.render('index.ejs')
})
app.get('/about', (req, res) => {
    res.send('About')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})