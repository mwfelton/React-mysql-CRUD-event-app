import express from "express";
import {addWorkshop, deleteWorkshop, getWorkshop, getWorkshops, updateWorkshop } from '../controllers/workshop-directory' 

const router = express.Router()

router.get("/", getWorkshop)
router.get("/", getWorkshops)
router.get("/", addWorkshop)
router.get("/", updateWorkshop)
router.get("/", deleteWorkshop)

export default router;