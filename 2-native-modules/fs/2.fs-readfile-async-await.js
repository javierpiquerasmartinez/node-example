const fs = require('node:fs/promises')

// IIFE - Inmediately Invoked Function Expression
;(
  async () => {
    console.log('Leyendo el primer archivo...')
    const t1 = await fs.readFile('./archivo.txt', 'utf-8')
    console.log(t1)

    console.log('Hacer cosas mientras lee el archivo...')

    console.log('Leyendo el segundo archivo...')
    const t2 = await fs.readFile('./archivo2.txt', 'utf-8')
    console.log(t2)
  }
)()
