const opts = {
    descripcion: {
        demand: true,
        alias: 'd',
        desc: 'Descripción de la tarea'
    },
    completado: {
        alias: 'c',
        default: true,
        desc: 'Marca como completado o pendiente la tarea'
    }
}
const argv = require('yargs')
    .command('crear', `Crea una tarea por hacer`, opts)
    .command('actualizar', `Acttualiza el estado completado de una tarea por hacer`, opts)
    .help()
    .argv;

module.exports = { argv };