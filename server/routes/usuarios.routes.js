import { Router } from 'express'
import controllersUsuasrios from '../controllers/usuario.controllers.js'

const routerUsuario = Router()

routerUsuario.get('/get', controllersUsuasrios.get)
routerUsuario.get('/get/id/:id', controllersUsuasrios.getById)
routerUsuario.get('/get/nombre/:nombre', controllersUsuasrios.getByNombre)
routerUsuario.get('/get/usuario/:usuario', controllersUsuasrios.getByUsuario)

routerUsuario.post('/post', controllersUsuasrios.post)

routerUsuario.put('/put/id/:id', controllersUsuasrios.putById)
routerUsuario.put('/put/nombre/:nombre', controllersUsuasrios.putByNombre)
routerUsuario.put('/put/usuario/:usuario', controllersUsuasrios.putByUsuario)

routerUsuario.delete('/delete/id/:id', controllersUsuasrios.deleteById)
routerUsuario.delete('/delete/nombre/:nombre', controllersUsuasrios.deleteByNombre)
routerUsuario.delete('/delete/usuario/:usuario', controllersUsuasrios.deleteByUsuario)

export default routerUsuario