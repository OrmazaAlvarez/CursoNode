const argv = require('./config/yargs').argv;
const colors = require('colors');
const porHacer = require('./todo/todo');
let comando = argv._[0];
switch (comando) {
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;
    case 'listar':
        let listado = porHacer.getListado();
        for (let tarea of listado) {
            console.log('========Por Hacer========'.blue);
            console.log(tarea.descripcion);
            console.log('Estado: ', colors.green(tarea.completado));
            console.log('========================'.red);
        }
        break;
    case 'actualizar':
        console.log('Actualiza una tarea por hacer');
        break;
    default:
        console.log('No se reconoce el comando.');
}