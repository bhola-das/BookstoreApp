import express from "express"
import { getBook } from "../controller/Bookcontroller.js"

const router = express.Router();

router.get("/", getBook);

export default router;