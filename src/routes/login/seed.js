import bcrypt from 'bcrypt';
import database from '../login/database.js'

const users = [
  { username: 'daniel', password: 'admin1', token: 'token1' },
  { username: 'saskia', password: 'admin2', token: 'token2' },
  { username: 'edward', password: 'admin3', token: 'token3' },
  { username: 'aston', password: 'admin4', token: 'token4' },
];

const statment = database.prepare(`
  INSERT OR IGNORE INTO users (username, password, token)
  VALUES (?, ?, ?)
`);

(async () => {
  for (const user of users) {
    // Hash each user's password separately
    const hashedPassword = await bcrypt.hash(user.password, 10);
    statement.run(user.username, hashedPassword, user.token);
  }

  console.log('Seeded users with unique passwords');
})();