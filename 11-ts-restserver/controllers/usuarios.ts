import { Request, Response } from "express";


export const getUsuarios = ( req:Request, res:Response ) => {
    res.json({
        msg:'getUsuarios'
    })
}
export const getUsuario = ( req:Request, res:Response ) => {
    const { id } = req.params;

    res.json({
        msg:'getUsuario',
        id
    })
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

