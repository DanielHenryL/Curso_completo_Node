

const deadpool = {
    nombre: 'Daniel',
    apellido: 'Lagunas',
    poder: 'Regeneracion',
    getNombre: function( ){
        return `${ this.nombre } ${ this.apellido } ${ this.poder }`
    } 
}   
// const { nombre, apellido, poder } = hero
// console.log( nombre, apellido, poder )   

function imprimeHero( { nombre, apellido, poder, edad=5 } ) { 
    console.log( nombre, apellido, poder, edad )   
}

imprimeHero( deadpool );

const heroes = [ 'Deadpool', 'Superman', 'Batman']

// const h1 = heroes[2] // Batman
const [ , , h3] = heroes

console.log( h3 )
