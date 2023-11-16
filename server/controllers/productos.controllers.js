import { prisma } from '../helper/prisma.helper.js'
import cuerpo from '../helper/cuerpo.helper.js'

const controllersProductos = {}

controllersProductos.get = async (req, res) => {
    cuerpo.simplificar(req, res, await prisma.producto.findMany())
}

controllersProductos.getById = async (req, res) => {
    cuerpo.simplificar(req, res, await prisma.producto.findUnique({
        where: {
            'id': parseInt(req.params.id)
        }
    }))
}

controllersProductos.getByNombre = async (req, res) => {
    cuerpo.simplificar(req, res, await prisma.findMany({
        where: {
            'nombre': req.params.nombre
        }
    }))
}

controllersProductos.getByCategoria = async (req, res) => {
    cuerpo.simplificar(req, res, await prisma.producto.findMany({
        where: {
            'categoria': req.params.categoria
        }
    }))
}

controllersProductos.post = async (req, res) => {
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

controllersProductos.putByid = async (req, res) => {
    cuerpo.simplificar(req, res, await prisma.producto.update({
        where: {
            'id': parseInt(req.params.id)
        }, data: req.body
    }))
}

controllersProductos.putByNombre = async (req, res) => {
    cuerpo.simplificar(req, res, await prisma.producto.update({
        where: {
            'nombre': req.params.nombre
        }, data: req.body
    }))
}

controllersProductos.deleteById = async (req, res) => {
    cuerpo.simplificar(req, res, await prisma.producto.delete({
        where: {
            'id': parseInt(req.params.id)
        }
    }))
}

controllersProductos.deleteByNombre = async (req, res) => {
    cuerpo.simplificar(req, res, await prisma.producto.delete({
        where: {
            'nombre': req.params.nombre
        }
    }))
}

export default controllersProductos