import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import cors from 'cors'
import Rutas_Huecos from "./routes/routes_Huecos.js"

dotenv.config()
const app= express()
const PORT= process.env.PORT || 3006
app.set('port', PORT)
app.use(cors())
//PRIMERO USE JSON 
app.use(express.json())
//DESPUES RUTAS
app.use("/api/huecos/",Rutas_Huecos)
/*app.get('/',(req,res)=>{
    res.send("hello world")
})*/

mongoose.connect(process.env.MONGODB_URI,)
.then(()=>console.log("connected to db"))
.catch((err)=>console.log(err.message))

app.listen(PORT,()=>{
    console.log(`Escuchando el puerto ${PORT}`)
})