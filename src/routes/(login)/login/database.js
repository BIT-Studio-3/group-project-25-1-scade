import Database from 'better-sqlite3';

const db = new Database('users.db');

// Create users table if it doesn't already exist
db.prepare(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT UNIQUE,
    password TEXT,
    token TEXT
  )
`).run();

export default db;