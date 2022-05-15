import sqlite3 from 'sqlite3'
import { open } from 'sqlite'

const CREATE_LOCATION_TABLE = "CREATE TABLE IF NOT EXISTS locations (name TEXT NOT NULL, address TEXT NOT NULL, lat REAL NOT NULL, long REAL NOT NULL, created TIMESTAMP DEFAULT CURRENT_TIMESTAMP);";
const CREATE_RATING_TABLE = "CREATE TABLE IF NOT EXISTS ratings (rating INT NOT NULL, location INT NOT NULL, details TEXT NOT NULL, image TEXT, created TIMESTAMP DEFAULT CURRENT_TIMESTAMP);";

export async function initDb() {
    const db = await openDb()
    await db.exec(CREATE_LOCATION_TABLE);
    await db.exec(CREATE_RATING_TABLE);
}

export async function openDb() {
  return open({
    filename: './tmp/database.db',
    driver: sqlite3.Database
  })
}