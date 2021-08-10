const argv = require('./config/yargs');
const colors = require('colors');
const { crearArchivo } = require('./helpers/multiplicar');


console.clear();

// const [, , arg3 = 'base=5'] = process.argv;
// const [, base = 5] = arg3.split('=');
// const base = 9;
crearArchivo(argv.b, argv.l, argv.h)
    .then(nombreArchivo => console.log(nombreArchivo.rainbow, 'Creado'))
    .catch(err => console.log(err));



