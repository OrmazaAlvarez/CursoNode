let deadpool = {
    nombre: 'Wade',
    apellido: 'Wiston',
    poder: 'Regenración',
    getNombre: function() {
        return `${this.nombre} ${this.apellido} - poder: ${this.poder}`
    }
}

/*
let nombre = this.deadpool.nombre;
let apellido = this.deadpool.apellido;
let poder = this.deadpool.poder;
 */

let { nombre: primerNombre, apellido, poder } = deadpool;
console.log(primerNombre, apellido, poder);