import { readFile } from 'node:fs/promises'

console.log('Leyendo el primer archivo...')
const t1 = await readFile('./archivo.txt', 'utf-8')
console.log(t1)

console.log('Hacer cosas mientras lee el archivo...')

console.log('Leyendo el segundo archivo...')
const t2 = await readFile('./archivo2.txt', 'utf-8')
console.log(t2)
