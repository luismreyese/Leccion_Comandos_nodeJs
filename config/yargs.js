const argv = require('yargs').command('crear', 'Crear un Elemento por hacer', {
        descripcion: {
            demand: true,
            alias: 'd',
            desc: 'Descripcion Tarea por hacer'

        }
    }).command('actualizar', 'Actualiza el estado de una tarea', {
        descripcion: {
            demand: true,
            alias: 'd',
            desc: 'Descripcion Tarea por actualizar'
        },
        completado: {
            alias: 'c',
            default: true
        }
    }).command('borrar', 'Elimina una tarea de la lista', {
        descripcion: {
            demand: true,
            alias: 'b'
        }
    })
    .help().argv;

module.exports = {
    argv
}