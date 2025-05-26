import bcrypt from 'bcrypt';
import database from './database.js';

async function seed() {
  const users = [
    { username: 'daniel', password: 'admin1' },
    { username: 'saskia', password: 'admin2' },
    { username: 'edward', password: 'admin3' },
    { username: 'aston', password: 'admin4' }
  ];

  const statement = database.prepare(`
    INSERT OR IGNORE INTO users (username, password, token)
    VALUES (?, ?, ?)
  `);

  for (const user of users) {
    const hashed = await bcrypt.hash(user.password, 10);
    statement.run(user.username.toLowerCase(), hashed, null);
    console.log(`Seeded user: ${user.username} / ${user.password}`);
  }
}

seed();
