
import { Router } from "express";
import * as UpdateController from './controller/update.js'

import {  fileValidation, myMulter } from "../../services/multer.js";
const router= Router()




router.post('/',myMulter(fileValidation.image).array('images',5),UpdateController.addData)

router.get('/:placeName',UpdateController.showData)


export default router