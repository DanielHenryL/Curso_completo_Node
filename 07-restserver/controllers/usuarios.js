const { response } = require('express');

const usuariosGet= ( req, res = response ) => {
    res.json({
        msg: 'get API - controlador'
    });
}
const usuariosPut= ( req, res = response ) => {
    res.json({
        msg: 'put API - controlador'
    });
}
const usuariosPost= ( req, res = response ) => {

    const { edad, nombre, apellido } = data
    
    res.json({
        msg: 'post API - controlador',
        usuario: {
            nombre,
            apellido,
            edad
        }
    });
}
const usuariosDelete= ( req, res = response ) => {
    res.json({
        msg: 'delete API - controlador'
    });
}

module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete

}