const argv = require('./config/yargs').argv;
const colr = require('colors/safe');
const estd = true;

const porHacer = require('./porhacer/todo');

let comando = argv._[0];

switch (comando) {
    case 'crear':
        console.log('lista por crear');
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;
    case 'listar':
        console.log('Mostar todas las listas por hacer');
        let listadoPorHacer = porHacer.getListado();
        console.log(colr.green('=======Tareas por Hacer ========='));
        // para recorrer el arreglo, se puede utilizar ForEach o For( var in object)
        listadoPorHacer.forEach(element => {
            console.log(`Descripcion: ${colr.blue(element.descripcion)}`);
            console.log(`Estado: ${colr.red(element.completado)}`);
        });

        // for (const tarea in listadoPorHacer) {
        //     let xhacer = listadoPorHacer[tarea];
        //     console.log(`Descripcion: ${color.blue(xhacer.descripcion)}`);
        //     console.log(`Estado: ${color.blue(xhacer.completado)}`);
        // }
        console.log(colr.green('================================='));
        break;
    case 'actualizar':
        let respuesta = porHacer.actualizar(argv.descripcion, argv.completado);
        if (respuesta) { console.log(colr.bgGreen('Tarea Actualizada')); } else { console.log(colr.bgRed('Tarea No Actualizada')) }
        break;

    case 'borrar':
        let borrar = porHacer.borrar(argv.descripcion);
        if (borrar) {
            console.log(colr.bgGreen(`se eliminó la tarea: ${ argv.descripcion }`));
        }

        break;

    default:
        console.log('comando no reconocido');
        break;
}