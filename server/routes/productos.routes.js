import { Router } from 'express'
import controllersProductos from '../controllers/productos.controllers.js'

const routerProducto = Router()

routerProducto.get('', controllersProductos.get)
routerProducto.get('/:id', controllersProductos.getOne)
routerProducto.post('', controllersProductos.create)
routerProducto.put('/:id', controllersProductos.put)
routerProducto.delete('/:id', controllersProductos.delete)

export default routerProducto