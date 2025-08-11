import mongoose from "mongoose"

const Schema = mongoose.Schema

const Huecos_Schema = new Schema({
    direccion: {
        type: String,
        required: true,
        maxlength: 25
        
    },
    categoria:{
        type: String, 
        required:true
    },
    observaciones:{
        type: String,
        required: false,
        maxlength: 100
    }
})

export default mongoose.model("huecoModel",Huecos_Schema)
