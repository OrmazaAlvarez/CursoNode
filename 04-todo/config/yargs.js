const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripción de la tarea'
};
const completado = {
    alias: 'c',
    desc: 'Marca como completado o pendiente la tarea'
};

const argv = require('yargs')
    .command('crear', `Crea una tarea por hacer`, { descripcion, completado })
    .command('listar', `Muestra todas las tareas por hacer`, { completado })
    .command('actualizar', `Acttualiza el estado completado de una tarea por hacer`, { descripcion, completado })
    .command('borrar', `Borra una tarea por hacer`, { descripcion })
    .help()
    .argv;

module.exports = { argv };