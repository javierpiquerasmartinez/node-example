// Argumentos de entrada
console.log(process.argv)

// Current working directory
console.log('CWD', process.cwd())

// Controlar el proceso y su salida

// platform
console.log(process.env.OS)

process.exit(1)

// Controlar eventos del proceso
process.on('exit', () => {
  // Limpiar los recursos
})
