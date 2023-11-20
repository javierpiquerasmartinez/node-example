const http = require('node:http')
const { findAvailablePort } = require('../net/6.free-port')

const server = http.createServer((req, res) => {
  console.log('request received')
  res.end('Hola Mundo!')
})

findAvailablePort(3000).then(port => {
  server.listen(port, () => {
    console.log(`El servidor está escuchando en el puerto ${server.address().port}`)
  })
})
