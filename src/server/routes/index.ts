import { Router } from "express"
import epg from "./epg"

const router = Router()

router.use("/epg", epg)

export default router
