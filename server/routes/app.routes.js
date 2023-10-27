import { Router } from 'express'
import { dirname } from 'path'
import { fileURLToPath } from 'url'
import fs from 'fs'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const router = Router()


function removeExtension(file) {
    return file.split('.').shift()
} 

fs.readdirSync(__dirname).filter((file) => {
    if (removeExtension !== "app") {
        import(`./${file}`).then((module) => {
            router.use(`/${removeExtension(file)}`, module.default)
        }).catch((error) => {
            console.log(`Error en ${file}:`, error)
        })
    }
})

export default router