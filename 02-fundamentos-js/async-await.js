const empleados = [
    {
        id: 1,
        nombre: 'daniel'
    },
    {
        id: 2,
        nombre: 'cesar'
    },
    {
        id: 3,
        nombre: 'joel'
    },
    {
        id: 4,
        nombre: 'efra'
    },
]
const salarios = [
    {
        id: 1,
        salario: 2000
    },
    {
        id: 2,
        salario: 1000
    },
    {
        id: 3,
        salario: 1500
    }  
]

const getEmpleado = ( id ) =>{

    return promesa = new Promise( ( resolve, reject ) => {
        
        const empleado = empleados.find( e => e.id === id)?.nombre;

        ( empleado ) ? resolve( empleado ) : reject( `No existe el empleado con id ${ id }` );

    });
}
const getSalario = ( id ) =>{

    return promesa = new Promise( ( resolve, reject ) => {
        
        const salario = salarios.find( s => s.id === id)?.salario;

        ( salario ) ? resolve( salario ) : reject( `No existe el salario con id ${ id }` );

    });
}

const getInfoUsuario = async( id ) =>{
    try {
        const empleado = await getEmpleado( id );
        const salario = await getSalario( id );

        return `El salario del empleado ${ empleado } es ${salario}`;

    } catch (error) {
        throw error;
    }
}

const id = 5;

getInfoUsuario( id )
    .then( msg => console.log( msg ))
    .catch( error => console.log( error ))