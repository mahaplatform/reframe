const express = require('express')
const app = express()
const path = require('path')

app.use(express.static('dist'))

app.use('*', (req, res) => res.sendFile(path.resolve('dist','index.html')))

app.listen(8080, () => {
  console.log('Example app listening on port 8080!')
})
