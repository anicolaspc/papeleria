import { prisma } from '../helper/prisma.helper.js'
import cuerpo from '../helper/cuerpo.helper.js'

const controllersUsuasrios = {}

controllersUsuasrios.get = async (req, res) => {
    cuerpo.simplificar(req, res, await prisma.usuario.findMany())
}

controllersUsuasrios.getById = async (req, res) => {
    cuerpo.simplificar(req, res, await prisma.usuario.findUnique({
        where: {
            'id': parseInt(req.params.id)
        }
    }))
}

controllersUsuasrios.getByNombre = async (req, res) => {
    cuerpo.simplificar(req, res, await prisma.usuario.findMany({
        where: {
            'nombre': req.params.nombre
        }
    }))
}

controllersUsuasrios.getByUsuario = async (req, res) => {
    cuerpo.simplificar(req, res, await prisma.usuario.findMany({
        where: {
            'usuario': req.params.usuario
        }
    }))
}

controllersUsuasrios.post = async (req, res) => {
    delete req.body.id
    const data = {
        nombre: req.body.nombre,
        usuario: req.body.usuario,
        correo: req.body.correo,
        contrasena: req.body.contrasena,
        telefono: req.body.telefono
    }
    cuerpo.simplificar(req, res, await prisma.usuario.create({
        data
    }))
}

controllersUsuasrios.putById = async (req, res) => {
    cuerpo.simplificar(req, res, await prisma.usuario.update({
        where: {
            'id': parseInt(req.params.id)
        }, data: req.body
    }))
}

controllersUsuasrios.putByNombre = async (req, res) => {
    cuerpo.simplificar(req, res, await prisma.usuario.update({
        where: {
            'nombre': req.params.nombre
        }, data: req.body
    }))
}

controllersUsuasrios.putByUsuario = async (req, res) => {
    cuerpo.simplificar(req, res, await prisma.usuario.update({
        where: {
            'usuario': req.params.usuario
        }, data: req.body
    }))
}

controllersUsuasrios.deleteById = async (req, res) => {
    cuerpo.simplificar(req, res, await prisma.usuario.delete({
        where: {
            'id': parseInt(req.params.id)
        }
    }))
}

controllersUsuasrios.deleteByNombre = async (req, res) => {
    cuerpo.simplificar(req, res, await prisma.usuario.delete({
        where: {
            'nombre': req.params.nombre
        }
    }))
}

controllersUsuasrios.deleteByUsuario = async (req, res) => {
    cuerpo.simplificar(req, res, await prisma.usuario.delete({
        where: {
            'usuario': req.params.usuario
        }
    }))
}


export default controllersUsuasrios