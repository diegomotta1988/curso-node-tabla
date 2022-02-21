const { crearArchivo } = require('./helpers/multiplicar');
const { argv } = require('./config/yargs');
console.clear();

// const [, , arg3 = 'base=5'] = process.argv;
// const [, base = 5] = arg3.split('=');
// console.log(process.argv);

const { base, listar, hasta } = argv;

crearArchivo(base, listar, hasta)
  .then((nombreArchivo) => console.log(nombreArchivo, 'creado'))
  .catch((err) => {
    console.log(err);
  });
