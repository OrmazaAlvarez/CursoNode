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

let getEmpleado = async(id) => {
    let empleadoDB = empleados.find(empleado => empleado.id === id);
    if (!empleadoDB) {
        throw new Error(`No existe un empleado con el ID ${id}`);
    } else {
        return empleadoDB;
    }
}

let getSalario = async(empleado) => {
    let salarioDB = salarios.find(salario => salario.id === empleado.id);
    if (!salarioDB) {
        throw new Error(`No se encontró un salario para el usuario ${empleado.nombre}`);
    } else {
        return {
            id: empleado.id,
            nombre: empleado.nombre,
            salario: salarioDB.salario
        };
    }
}

let getInformacion = async(id) => {
    let empleado = await getEmpleado(id);
    let result = await getSalario(empleado);
    return `El salario de ${result.nombre} es de $${result.salario}`;
};

getInformacion(3).then(mensaje => console.log(mensaje))
    .catch(err => console.log(err));