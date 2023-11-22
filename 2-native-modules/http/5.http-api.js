const http = require('node:http')

const processRequest = (req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/plain; charset=utf-8')
  if (req.url === '/') {
    res.end('Bienvenidos a mi página de inicio')
  } else if (req.url === '/contacto') {
    res.end('Contacto')
  } else {
    res.statusCode = 404
    res.end('No encontrado')
  }
}

const server = http.createServer(processRequest)

server.listen(3000, () => {
  console.log(`El servidor está escuchando en el puerto ${server.address().port}`)
})
