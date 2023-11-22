const http = require('node:http')
const seviperJSON = require('./seviper.json')

const processRequest = (req, res) => {
  const { method, url } = req

  switch (method) {
    case 'GET': {
      switch (url) {
        case ('/pokemon/seviper'):{
          res.statusCode = 200
          res.setHeader('Content-Type', 'application/json; charset=utf-8')
          res.end(JSON.stringify(seviperJSON))
          break
        }
        default:{
          res.statusCode = 404
          res.setHeader('Content-Type', 'text/plain; charset=utf-8')
          res.end('Not found')
        }
      }
      break
    }
    case 'POST': {
      res.statusCode = 201
      res.setHeader('Content-Type', 'application/json; charset=utf-8')
      switch (url) {
        case ('/pokemon/seviper'):{
          let body = ''
          req.on('data', chunk => {
            body += chunk.toString()
          })
          req.on('end', () => {
            const data = JSON.parse(body)
            res.end(JSON.stringify(data))
          })
          break
        }
        default: {
          res.statusCode = 404
          res.setHeader('Content-Type', 'text/plain; charset=utf-8')
          res.end('Not found')
        }
      }
    }
  }
}

const server = http.createServer(processRequest)

server.listen(3000, () => {
  console.log('Server listening on port: 3000')
})
