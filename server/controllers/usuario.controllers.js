import { prisma } from '../helper/prisma.helper.js'
import cuerpo from '../helper/cuerpo.helper.js'

const controllersUsuasrios = {}

controllersUsuasrios.get = async (req, res) => {
    cuerpo.simplificar(req, res, await prisma.usuario.findMany())
}

controllersUsuasrios.getOne = async (req, res) => {
    cuerpo.simplificar(req, res, await prisma.usuario.findUnique({
        where: {
            'id': parseInt(req.params.id)
        }
    }))
}

controllersUsuasrios.create = async (req, res) => {
    cuerpo.simplificar(req, res, await prisma.usuario.create({
        data: req.body
    }))
}

controllersUsuasrios.put = async (req, res) => {
    cuerpo.simplificar(req, res, await prisma.usuario.update({
        where: {
            'id': parseInt(req.params.id)
        }, data: req.body
    }))
}

controllersUsuasrios.delete = async (req, res) => {
    cuerpo.simplificar(req, res, await prisma.usuario.delete({
        where: {
            'id': parseInt(req.params.id)
        }
    }))
}


export default controllersUsuasrios