import { Router } from "express"
import {crearHueco,getAllHuecos,getHuecoByDir,getHuecoByDirClose,updateHueco,deleteHueco,getHuecoById}  from "../controller/controller_Huecos.js"

const router = Router()

//router.get("/",hey)
router.post("/", crearHueco)
router.get("/",getAllHuecos)
router.get("/direc",getHuecoByDir)
router.get("/direc/:dir",getHuecoByDirClose )
router.get("/:id",getHuecoById )
router.put("/:id",updateHueco)
router.delete("/:id",deleteHueco)
export default router
