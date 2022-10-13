

export const mostrarMenu = () => {
    console.clear();
    console.log('+++++++++++++++++++++');
    console.log('Seleccione una opción')
    console.log('+++++++++++++++++++++\n');

    console.log(`1. Crear tarea`);
    console.log(`2. Listar tareas`);
    console.log(`3. Listar tareas completadas`);
    console.log(`4. Listar tareas pendientes`);
    console.log(`5. Competar tarea(s)`);
    console.log(`6. Borrar tarea`);
    console.log(`0. Salir\n`);

    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    })

    readline.question('\nSeleccione una opción: \n', (opt: any) => {
        readline.close();
    });
    
}

export const pause = () => {
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    })

    readline.question('Presione ENTER para continuar', (opt: any) => {
        readline.close();
    });
}