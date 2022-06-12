import { Router } from "express"
import { EpgController } from "../controllers/EpgController"

const router = Router()

router.get("/:file", EpgController.epg)

export default router
