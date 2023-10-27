import { prisma } from '../helper/prisma.helper.js'
import cuerpo from '../helper/cuerpo.helper.js'

const controllersProductos = {}

controllersProductos.get = async (req, res) => {
    cuerpo.simplificar(req, res, await prisma.producto.findMany())
}

controllersProductos.getOne = async (req, res) => {
    cuerpo.simplificar(req, res, await prisma.producto.findUnique({
        where: {
            'id': parseInt(req.params.id)
        }
    }))
}

controllersProductos.create = async (req, res) => {
    delete req.body.id

    const data = {
        imagen: req.body.imagen,
        nombre: req.body.nombre,
        detalles: req.body.detalles,
        precio: parseInt(req.body.precio),
        cantidad: parseInt(req.body.cantidad),
        categoria: req.body.categoria
    }

    cuerpo.simplificar(req, res, await prisma.producto.create({
        data
    }))
}

controllersProductos.put = async (req, res) => {
    cuerpo.simplificar(req, res, await prisma.producto.update({
        where: {
            'id': parseInt(req.params.id)
        }, data: req.body
    }))
}

controllersProductos.delete = async (req, res) => {
    cuerpo.simplificar(req, res, await prisma.producto.delete({
        where: {
            'id': parseInt(req.params.id)
        }
    }))
}


export default controllersProductos