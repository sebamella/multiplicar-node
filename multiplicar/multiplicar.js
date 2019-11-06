const fs = require('fs');
const colors = require('colors');


let listarTabla = (base, limite) => {
    return new Promise((resolve, reject) => {


        if (!Number(base)) {
            reject(`EL valor introducido ${base} no es un numero `);
            return;
        };


        if (!Number(limite)) {
            reject(`EL valor introducido ${limite} no es un numero `);
            return;
        };


        let data = '';

        for (let i = 1; i <= limite; i = i + 1) {
            data += `${base} * ${i} = ${i * base}\n`;
        };

        resolve(data);
    });
}

let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {


        if (!Number(base)) {
            reject(`EL valor introducido ${base} no es un numero `);
            return;
        }
        if (!Number(limite)) {
            reject(`EL valor introducido ${limite} no es un numero `);
            return;
        };

        let data = '';

        for (let i = 1; i <= limite; i = i + 1) {
            data += `${base} * ${i} = ${i * base}\n`;
        }



        fs.writeFile(`tablas/tabla-${base}.txt.`, data, (err) => {

            if (err) reject(err)
            else
                resolve(`tabla-${base}.txt`);
        });

    });
}

module.exports = {
    crearArchivo, listarTabla
}

