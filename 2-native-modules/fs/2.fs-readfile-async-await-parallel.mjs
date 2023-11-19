import { readFile } from 'node:fs/promises';

Promise.all([
    readFile('./archivo.txt', 'utf-8'),
    readFile('./archivo2.txt', 'utf-8')
]).then(([t1, t2])=>{
    console.log(t1)
    console.log(t2)
})

