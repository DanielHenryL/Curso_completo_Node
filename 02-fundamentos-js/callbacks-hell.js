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

const getEmpleado = ( id, callback ) =>{

    const empleado = empleados.find( e => e.id === id)?.nombre

    if(empleado){
        callback( null, empleado)
    }else{
        callback(`Empleado con id ${ id } no existe`)
    }

}

const getSalario = ( id, callback ) =>{

    const salario = salarios.find( e => e.id === id)?.salario;

    if( salario ){
        callback( null, salario)
    }else{
        callback(`Salario del id ${id} no existe`)
    }

}

const id = 4;

 getEmpleado( id, ( error, empleado ) => {

    if( error ){
        return console.log( error )
    }

    getSalario( id, ( error, salario) => {

        if( error ){
            return console.log( error )
        }

        console.log( 'El empleado:', empleado, 'tiene un salario de:', salario )
        
     })

 } ) 


