import { initializeApp, applicationDefault } from "firebase-admin/app"
import { getStorage } from "firebase-admin/storage"

const firebase = initializeApp({
  credential: applicationDefault(),
})

const storage = getStorage(firebase)
export const bucket = storage.bucket("mplus-802b4.appspot.com")
