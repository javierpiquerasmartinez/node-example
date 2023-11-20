const path = require('path')

console.log(path.sep)

const filePath = path.join('resources', 'code', 'images')
console.log(filePath)
const fileName = path.basename('resources/javi.jpg')
console.log(fileName)
const basename = path.basename('resources/javi.jpg', '.jgp')
console.log(basename)
const extension = path.extname('resources/javi.jpg')
console.log(extension)