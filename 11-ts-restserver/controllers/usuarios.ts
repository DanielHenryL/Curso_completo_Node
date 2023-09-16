import { Request, Response } from "express";
import Usuario from "../models/usuario";


export const getUsuarios = async( req:Request, res:Response ) => {

    const usuarios = await Usuario.findAll();

    res.json({
        usuarios
    })
}
export const getUsuario = async( req:Request, res:Response ) => {
    const { id } = req.params;
    const usuario = await Usuario.findByPk(id);
    if ( !usuario) {
        return res.status(404).json({
            msg:`No existe un usuario con el id ${ id }`
        })
    }
    res.json( usuario )

}


export const postUsuario = ( req:Request, res:Response ) => {
    const { nombre } = req.body;
    res.json({
        msg:'postUsuario',
        nombre
    })
}
export const putUsuario = ( req:Request, res:Response ) => {
    const { id } = req.params;
    const { nombre } = req.body;
    res.json({
        msg:'putUsuario',
        nombre,
        id
    })
}
export const deleteUsuario = ( req:Request, res:Response ) => {
    const { id } = req.params;
    res.json({
        msg:'deleteUsuario',
        id
    })
}

