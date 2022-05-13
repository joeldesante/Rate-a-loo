import express from "express"
import settings from "./settings.json" assert { type: 'json' }
import api from "./routes/api.js"
import { initDb } from "./database.js"

initDb()
// Creates the schema needed for the application to function

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"))
// Serve Static Content

app.use("/api", api)

app.listen(settings.port, settings.hostname, () => {
    console.log(`Server running on http://${settings.hostname}:${settings.port}`)
})