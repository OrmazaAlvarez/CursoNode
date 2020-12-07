/* let getNombre = async() => {
    throw new Error('No existe un nombre en la base de datos');
    return 'Lenin';
}; */

let getNombre = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve('Lenin'), 3000)
    })
}

let saludo = async() => {
    let nombre = await getNombre();
    return `Hola ${nombre}`;
}

saludo().then(mensaje => {
    console.log(mensaje);
});