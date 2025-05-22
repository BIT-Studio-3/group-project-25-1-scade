import bcrypt from 'bcrypt';
import database from './database.js'

const password = 'admin1';
const hashed = await bcrypt.hash(password, 10);

const statment = database.prepare(`
  INSERT OR IGNORE INTO users (username, password, token)
  VALUES (?, ?, ?)
`);

statment.run('daniel', hashed, 'token1');

console.log('Seeded user: daniel / admin1');