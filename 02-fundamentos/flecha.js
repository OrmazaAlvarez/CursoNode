/* function sumar(a, b) {
    return a + b;
} */

/* let sumar = (a, b) => {
    return a + b;
} */

//let sumar = (a, b) => a + b;

//let saludar = () => 'Hola mundo';

/* function saludar(nombre) {
    return `Hola ${nombre}`;
} */

let saludar = nombre => `Hola ${nombre}`;

console.log(saludar('Lenin'));

let deadpool = {
    nombre: 'Wade',
    apellido: 'Wiston',
    poder: 'Regenración',
    getNombre() {
        return `${this.nombre} ${this.apellido} - poder: ${this.poder}`
    }
}

console.log(deadpool.getNombre())