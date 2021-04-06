const express = require('express')
const app = express()
const port = 8080

app.get('/', (req, res) => {
  res.send('Sara Pires - RM338142! com passo manual')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
