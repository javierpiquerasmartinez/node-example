const fs = require('node:fs')

console.log('Leyendo el primer archivo...')
// const text = fs.readFileSync('./archivo.txt', 'utf-8')
fs.readFile('./archivo.txt', 'utf-8', (_err, data) => {
  console.log(data)
})
console.log('Hacer cosas mientras lee el archivo...')

console.log('Leyendo el segundo archivo...')
// const text2 = fs.readFileSync('./archivo2.txt', 'utf-8')
fs.readFile('./archivo2.txt', 'utf-8', (_err, data) => {
  console.log(data)
})
