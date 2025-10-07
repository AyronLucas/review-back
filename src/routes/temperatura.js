import express from 'express'
import ControllerTemperatura from '../controllers/temperatura.js'

//rotas do express
//app.get, app.post

const router = express.Router()


//primeiro parametro é o EndPoint
router.post('/celFah', ControllerTemperatura.ConvertCelToFah)

export default router