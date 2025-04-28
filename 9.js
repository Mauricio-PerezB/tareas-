// Función asincrónica que espera 2 segundos
async function esperarYDevolverMensaje() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("¡Hola después de 2 segundos!");
        }, 2000);
    });
}

// Función principal para usar await
async function main() {
    const mensaje = await esperarYDevolverMensaje();
    console.log(mensaje);
}

// Llamar a la función principal
main();