const express = require('express')
const crypto = require('node:crypto')
const movies = require('./movies.json')

const app = express()

app.disable('x-powered-by')

app.use(express.json())

app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Hello World'
  })
})

app.get('/movies', (req, res) => {
  const { genre } = req.query
  if (genre) {
    const filteredMovies = movies.filter(
      movie => movie.genre.some(g => g.toLowerCase() === genre.toLowerCase())
    )
    return res.json(filteredMovies)
  }
  res.json(movies)
})

app.post('/movies', (req, res) => {
  console.log(req.body)
  const newMovie = {
    id: crypto.randomUUID(),
    ...req.body
  }

  movies.push(newMovie)

  res.status(201).json(newMovie)
})

app.get('/movies/:id', (req, res) => {
  const { id } = req.params
  const movie = movies.find(movie => movie.id === id)
  if (movie) return res.json(movie)
  else res.status(404).send('<h1>Resource not found</h4>')
})

const PORT = process.env.port ?? 3000

app.listen(PORT, () => {
  console.info(`Server listening on port http://localhost:${PORT}`)
})
