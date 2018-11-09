const fs = require('fs');
const color = require('colors/safe');

let listadoPorHacer = [];

const getListado = () => {
    if (listadoPorHacer.length == 0) {
        cargaDB();
        return listadoPorHacer;
    }
}

const guardar = () => {
    return new Promise((resolve, reject) => {
        let data = JSON.stringify(listadoPorHacer);
        console.log(data);
        fs.writeFile('DB/data.json', data, (err) => {
            if (err) {
                reject(err);
            } else resolve();
        })
    })
}

const cargaDB = () => {
    try {
        listadoPorHacer = require('../DB/data.json');
    } catch (error) {
        listadoPorHacer = [];
    }
}

const crear = (descripcion) => {

    cargaDB();

    let porHacer = {
        descripcion,
        completado: false
    };
    listadoPorHacer.push(porHacer);
    guardar().catch(err => { console.log(err); });
    return porHacer;
}

const actualizar = (descripcion, estado = true) => {
    cargaDB();
    let index = listadoPorHacer.findIndex(tarea => {
        return tarea.descripcion === descripcion
    });

    if (index >= 0) {
        listadoPorHacer[index].completado = estado;
        guardar().catch(err => { console.log(err); });;
        return true;
    } else {
        return false;
    }
}

const borrar = (descripcion) => {
    cargaDB();
    let index = listadoPorHacer.findIndex(tarea => {
        return tarea.descripcion === descripcion
    });

    if (index >= 0) {
        let work1 = listadoPorHacer.splice(index, 1);
        if (work1.length > 0) {
            guardar().catch(err => { console.log(err); });;
            return true;
        } else { return false; }

    }

}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}