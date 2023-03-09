const express = require('express');
import configViewEngine from './configs/configViewengine';

const app = express()
const port = 3000

configViewEngine(app);
app.get('/', (req, res) => {
  res.render('index.ejs')
})
app.get('/', (req, res) => {
  res.send('Hello fgafgpuuefl!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})