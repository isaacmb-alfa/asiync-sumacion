function verificarUsuario(usuario, callback) {
    setTimeout(() => {
        const existe = ['ana', 'luis'].includes(usuario);
        callback(existe);
    }, 1000);
}

function comprobarCuentaActiva(usuario, callback) {
    setTimeout(() => {
        const cuentaActiva = usuario !== 'luis';
        callback(cuentaActiva);
    }, 1000);
}

function verificarPermisos(usuario, callback) {
    setTimeout(() => {
        const permisos = usuario === 'ana';
        callback(permisos);
    }, 1000);
}

// Orquestación de las verificaciones
function procesoDeVerificacion(usuario) {
    console.log(`Iniciando verificación para el usuario: ${usuario}`);

    verificarUsuario(usuario, (existe) => {
        if (!existe) {
            return console.log(`El usuario no existe. ${usuario}`);
        }
        console.log(`Usuario verificado exitosamente. ${usuario}`);

        comprobarCuentaActiva(usuario, (activa) => {
            if (!activa) {
                return console.log(`La cuenta del usuario no está activa. ${usuario}`);
            }
            console.log(`La cuenta del usuario está activa. ${usuario}`);

            verificarPermisos(usuario, (permisos) => {
                if (!permisos) {
                    return console.log(`El usuario no tiene permisos. ${usuario}`);
                }
                console.log(`El usuario tiene permisos. Acceso concedido. ${usuario}`);
            });
        });
    });
}

// Ejecución de la función con diferentes usuarios
procesoDeVerificacion('ana');   // Usuario con acceso completo
procesoDeVerificacion('luis');  // Usuario sin cuenta activa
procesoDeVerificacion('pedro'); // Usuario que no existe