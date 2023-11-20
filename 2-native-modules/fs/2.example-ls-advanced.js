const fs = require('node:fs/promises')
const path = require('node:path')
const pc = require('picocolors')

const folder = process.argv[2] ?? '.'

async function ls (directory) {
  let files
  try {
    files = await fs.readdir(directory)
  } catch {
    console.log(pc.red(`No se pudo leer el directorio ${directory}`))
    process.exit(1)
  }

  const filesPromises = files.map(async file => {
    const filePath = path.join(directory, file)
    let fileStats
    try {
      fileStats = await fs.stat(filePath) // Informacion del archivo
    } catch {
      console.log(pc.red(`No se puede leer el archivo ${filePath}`))
      process.exit(1)
    }
    const isDirectory = fileStats.isDirectory()
    const fileType = isDirectory ? 'd' : '-'
    const fileSize = fileStats.size
    const fileModified = fileStats.mtime.toLocaleString()

    return `${fileType} ${file.padEnd(40)} ${fileSize.toString().padStart(10)} ${fileModified}`
  })

  const filesInfo = await Promise.all(filesPromises)
  filesInfo.forEach(fileInfo => { console.log(fileInfo) })
}

ls(folder)
