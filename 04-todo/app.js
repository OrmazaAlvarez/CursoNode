const argv = require('./config/yargs').argv;
const colors = require('colors');
const porHacer = require('./todo/todo');
let comando = argv._[0];
switch (comando) {
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion, argv.completado);
        console.log(tarea);
        break;
    case 'listar':
        let listado = porHacer.getListado();
        for (let tarea of listado) {
            console.log('========Por Hacer========'.blue);
            console.log(`Tarea: ${tarea.descripcion.green}`);
            console.log('Estado: ', colors.green(tarea.completado));
            console.log('========================'.red);
        }
        break;
    case 'actualizar':
        let tareaActualizada = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(tareaActualizada);
        break;
    case 'borrar':
        let resultado = porHacer.borrar(argv.descripcion);
        console.log(resultado);
        break;
    default:
        console.log('No se reconoce el comando.');
}