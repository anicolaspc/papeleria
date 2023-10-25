import { Router } from 'express'
import controllersUsuasrios from '../controllers/usuario.controllers.js'

const routerUsuario = Router()

routerUsuario.get('', controllersUsuasrios.get)
routerUsuario.get('/:id', controllersUsuasrios.getOne)
routerUsuario.post('', controllersUsuasrios.create)
routerUsuario.put('/:id', controllersUsuasrios.put)
routerUsuario.delete('/:id', controllersUsuasrios.delete)

export default routerUsuario