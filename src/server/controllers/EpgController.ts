import { Request, Response } from "express"
import { bucket } from "../firebase.storage"

export class EpgController {
  private static get = async (name: string) => {
    const response = await bucket.file("epg/" + name).download()
    return response.toString()
  }

  public static epg = async (req: Request, res: Response) => {
    const file = req.params.file
    const fileSplitted = file.split(".")
    const extension = fileSplitted[fileSplitted.length - 1]

    const allowedExtensions = ["xml", "gz"]

    if (!allowedExtensions.includes(extension)) {
      res.sendStatus(400)
      return
    }

    let epgContent: string
    try {
      epgContent = await this.get(file)
    } catch (e) {
      res.sendStatus(404)
      return
    }

    if (extension === "gz") {
      res.setHeader("Content-type", "application/gzip")
      res.attachment(file)
    }

    if (extension === "xml") {
      res.setHeader("Content-type", "application/xml")
    }

    res.send(epgContent)
  }
}
