import bcrypt from 'bcrypt';
import database from './database.js';

async function seed() {
  try {
    const username = 'Admin';
    const password = 'admin1';
    const hashed = await bcrypt.hash(password, 10);

    const statement = database.prepare(`
      INSERT OR IGNORE INTO users (username, password, token)
      VALUES (?, ?, ?)
    `);

    statement.run(username, hashed, null);
    console.log(`Seeded user: ${username} / ${password}`);
  } catch (err) {
    console.error('Error seeding database:', err);
  } finally {
    process.exit();
  }
}

seed();