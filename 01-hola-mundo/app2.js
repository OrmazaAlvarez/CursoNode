function saludar(nombre) {
    let mensaje = `Hola ${ nombre }`;
    return mensaje;
}

let saludo = saludar('Lenin');
console.log(saludo);