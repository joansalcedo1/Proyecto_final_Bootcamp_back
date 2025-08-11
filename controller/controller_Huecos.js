import huecoModel from "../models/schema_huecos.js"

const hey = async (req, res) => {
    console.log("hola desde el controlador")
    return res.status(200).send("Hola desde el controlador")
}
const crearHueco = async (req, res) => {
    try {
        const content = req.body
        //validar que las categorias solo sean las del array
        const categoriasPermitidas = ['pequeño', 'mediano', 'grande'];
        if (!categoriasPermitidas.includes(content.categoria)) {
            return res.status(400).json({ message: `'${content.categoria}' no funciona. 'categoria' debe ser uno de: ${categoriasPermitidas.join(', ')}` });
        }
        //validar que direccion sea de menos de 25 caracteres
        if (req.body.direccion.length > 25) {
            return (res.status(400).json({ message: "Bad request, pasaste el maximo de caracteres en 'direccion'" }))
        }
        //validar que observaciones sea de menos de 100 caracteres
        if (req.body.observaciones.length > 100) {
            return (res.status(400).json({ message: "Bad request, pasaste el maximo de caracteres en 'observaciones'" }))
        }
        await huecoModel.create(content)

        return res.status(201).json({ message: "creado correctamente", content })

        /*const pokemon = new pokemonModel(req.body)
        if(req.body.stats.length!=6){
            return res.status(400).json({Message:"Cantidad de stats incorrecta"})
        }
        
        await pokemon.save()
        return res.status(201).json(pokemon)*/

    } catch (error) {
        console.log(error)
        return res.status(500).json(error.message)
    }
}

const getAllHuecos = async (req, res) => {
    try {
        const huecos = await huecoModel.find()
        return res.status(200).json(huecos)
    } catch (error) {
        console.log(error)
        return (res.status(500).json(error))
    }
}
const getHuecoByDir = async (req, res) => {
    try {
        const dir = req.body.direccion
        const hueco = await huecoModel.findOne({ direccion: dir })
        if (!hueco) {
            return res.status(404).json({ message: `No existen huecos en ${dir}` })
        }
        return res.status(200).json(hueco)
    } catch (error) {
        console.log(error)
        return res.status(500).json(error)
    }
}
const getHuecoByDirParams = async (req, res) => {
    try {
        const dir = req.params.dir
        const hueco = await huecoModel.findOne({ direccion: dir })
        if (!hueco) {
            return res.status(404).json({ message: `No existen huecos en ${dir}` })
        }
        return res.status(200).json(hueco)
    } catch (error) {
        console.log(error)
        return res.status(500).json(error)
    }
}
const getHuecoByDirClose = async (req, res) => {
    try {
        const { dir } = req.params
        /* 
        Crear una expresión regular que coincida con direcciones que comiencen con el texto
        ^cra 100: comienza con cra100
        100 : contiene 100
        ^cra: comienza con cra 
        */
        const regex = new RegExp('^' + dir, 'i'); // 'i' = case-insensitive
        const huecos = await huecoModel.find({ direccion: regex })
        return res.status(200).json(huecos)
    } catch (error) {
        console.log(error)
        return res.status(500).json(error)
    }
}
const getHuecoById = async (req,res)=>{
    try {
        const {id} = req.params
        const hueco = await huecoModel.findById(id)
        return res.status(200).json(hueco)
    } catch (error) {
        console.log(error)
        return res.status(500).json(error)
    }
}
const updateHueco = async (req, res) => {
    try {
        const { id } = req.params
        if (id.length != 24) {
            return res.status(400).json({ message: "ID ingresado fue incorrecto" })
        }
        const huecoN = req.body
        //{new:true} : Le dice a Mongoose que te devuelva el documento actualizado, no el original
        const result = await huecoModel.findByIdAndUpdate(id, huecoN, { new: true })
        if (!result) {
            return res.status(404).json({ message: `hueco en direccion ${req.body.direccion} no existe` })
        }
        return res.status(200).json({ message: "Ok", result })
    } catch (error) {
        console.log(error)
        return res.status(500).json(error)
    }
}

const deleteHueco = async (req, res) => {
    try {
        const { id } = req.params
        if (id.length != 24) {
            return res.status(400).json({ message: "ID ingresado fue incorrecto" })
        }
        const result = await huecoModel.findByIdAndDelete(id)
        return res.status(200).json({ message: `Hueco con ID ${id} borrado correctamente. `, result })
    } catch (error) {
        console.log(error)
        return res.status(500).json(error)
    }
}

export { crearHueco, getAllHuecos, getHuecoByDir,getHuecoByDirParams, getHuecoById,getHuecoByDirClose, updateHueco, deleteHueco }