const argv = require('./config/yargs.js').argv;
const colors = require('colors');
const { crearArchivo, listarTabla} = require('./multiplicar/multiplicar');

let comando = argv._[0];
console.log(comando)
switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
            .then(resultado => console.log(resultado))
            .catch(eer =>console.log(eer));
        break;
    
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then( archivo => console.log(`Archivo creado ${ archivo.rainbow }`))
            .catch(e => console.log(e));
        break;
    
    default:
        console.log('Comando no reconocido');
}

