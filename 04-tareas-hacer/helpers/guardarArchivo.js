const fs = require('fs');

const archivo = './db/data.json'
const guardarDB = ( data ) =>{
    fs.writeFileSync(archivo, JSON.stringify(data))
}
const leerDB = () =>{
    if(!fs.existsSync(archivo)){
        return null;
    }
    const info = fs.readFileSync(archivo, { encoding:'utf8'})
    if (!info) {
        return;
    }
    const data = JSON.parse(info)
    return data
}

module.exports = {
    guardarDB,
    leerDB
}