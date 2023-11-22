const express = require('express')

const app = express()
app.disable('x-powered-by')

const port = process.env.PORT ?? '3000'

app.use((req, res, next) => {
  console.log('Middleware')
  next()
})

// Middleware that puts all chunks into the body
app.use(express.json())

app.get('/', (req, res) => {
  res.statusCode = 200
  res.send('Hello World')
})

app.post('/pokemon/seviper', (req, res) => {
  res.status(201).json({ pokemon: 'seviper' })
})

app.use((req, res) => {
  res.status(404).send('Not found')
})

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})
