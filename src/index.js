import express from 'express';
import configViewEnging from './configs/viewEngine';

const app = express()
const port = 8080

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