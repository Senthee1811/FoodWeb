import express from "express"
import { addFood } from "../controllers/foodController.js"
import multer from "multer"

const foodRouter = express.Router();

// Image Stroage Engine

const stroage = multer.diskStorage({
    destination:"uploads",
    filename:(req,file,cb)=>{
        return cb(null,`${Date.now()}${file.originalname}`)

    }
})

const upload = multer({stroage:stroage})

foodRouter.post('/add',addFood)


export default foodRouter;