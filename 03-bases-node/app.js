const argv = require('./config/yargs').argv;
const colors = require('colors');
const { crearArchivo, listar } = require("./multiplicar/multiplicar");
let comando = argv._[0];

switch (comando) {
    case 'listar':
        listar(argv.base, argv.limite)
            .then(tabla => console.log(tabla))
            .catch(err => console.log(err));
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(archivo))
            .catch(err => console.log(err));
        break;
    default:
        console.log('Comando no encontrado');
}

//console.log(argv);

/* let parametro = argv[2];
let base = parametro.split('=')[1]; */