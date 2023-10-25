const cuerpo = {}

cuerpo.simplificar = (req, res, query) => {
    try {
        if (!query) return res.status(500).json({error: 'Error en la peticion'})
        res.send(query)
    } catch (error) {
        console.error(error)
    }
}

export default cuerpo