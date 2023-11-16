import { Router } from 'express'
import controllersProductos from '../controllers/productos.controllers.js'

const routerProducto = Router()

routerProducto.get('/get', controllersProductos.get)
routerProducto.get('/get/id/:id', controllersProductos.getById)
routerProducto.get('/get/nombre/:nombre', controllersProductos.getByNombre)
routerProducto.get('/get/categoria/:categoria', controllersProductos.getByCategoria)

routerProducto.post('/post', controllersProductos.post)

routerProducto.put('/put/id/:id', controllersProductos.putByid)
routerProducto.put('/put/nombre/:nombre', controllersProductos.putByNombre)

routerProducto.delete('/delete/id/:id', controllersProductos.deleteById)
routerProducto.delete('/delete/nombre/:nombre', controllersProductos.deleteByNombre)

export default routerProducto