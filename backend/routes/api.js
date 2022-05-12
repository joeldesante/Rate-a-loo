import express from "express"
import { openDb } from "../database.js"
import { getBoundsFromPoint } from "../lib/geospace.js"

// ... the endpoints.
const router = express.Router()

router.get("/ping", async (req, res) => {
    res.json({ message: "Pong!" })
})

router.get("/ratings", async (req, res) => {
    const db = await openDb()
    const ratings = await db.all('SELECT * FROM ratings LIMIT 25 OFFSET 0')
    res.json(ratings)
})

router.post("/ratings", async (req, res) => {

    if(req.body === undefined) {
        res.sendStatus(400);
        return;
    }

    const { rating, location, details } = req.body
    const db = await openDb()
    const result = await db.run('INSERT INTO ratings (rating, location, details) VALUES (:rating, :location, :details)', {
        ':rating': rating,
        ':location': location,
        ':details': details,
    })

    res.json({ status: "OK" })
})

router.get("/ratings/:rating", async (req, res) => {
    const db = await openDb()
    const rating = await db.get('SELECT * FROM ratings WHERE rowid = ?', req.params.rating)

    if(rating === undefined) {
        res.sendStatus(404);
        return;
    }

    res.json(rating)
})

router.delete("/ratings/:rating", async (req, res) => {
    const db = await openDb()
    const result = await db.run('DELETE FROM ratings WHERE rowid = ?', req.params.rating)
    res.json({ status: "OK" })
})

router.get("/locations", async (req, res) => {
    const { lat, long, radius = 25 } = req.query
    if (!lat && !long) {
        res.sendStatus(400);
        return
    }

    getBoundsFromPoint()

    res.json({ lat, long, radius })
})

router.post("/locations", async (req, res) => {
    
})

router.get("/locations/:location", async (req, res) => {
    
})


export default router