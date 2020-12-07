let empleados = [{
    id: 1,
    nombre: 'Lenin'
}, {
    id: 2,
    nombre: 'Ormaza'
}, {
    id: 3,
    nombre: 'Alvarez'
}];

let salarios = [{
    id: 1,
    salario: 1000
}, {
    id: 2,
    salario: 2000
}];

let getEmpleado = (id) => {

    return new Promise((resolve, reject) => {
        let empleadoDB = empleados.find(empleado => empleado.id === id);
        if (!empleadoDB) {
            reject(`No existe un empleado con el ID ${id}`);
        } else {
            resolve(empleadoDB);
        }
    });
}

let getSalario = (empleado) => {
    return new Promise((resolve, reject) => {
        let salarioDB = salarios.find(salario => salario.id === empleado.id);
        if (!salarioDB) {
            reject(`No se encontró un salario para el usuario ${empleado.nombre}`);
        } else {
            resolve({
                id: empleado.id,
                nombre: empleado.nombre,
                salario: salarioDB.salario
            });
        }
    });
}

getEmpleado(3).then((empleado) => {
    getSalario(empleado).then((result) => {
        console.log(`El salario de ${result.nombre} es de $${result.salario}`)
    }).catch((err) => console.log(err));
}).catch((err) => console.log(err));