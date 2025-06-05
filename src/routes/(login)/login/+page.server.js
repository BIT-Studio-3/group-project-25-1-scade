import { redirect, fail } from "@sveltejs/kit";
import bcrypt from 'bcrypt';
import database from './database.js';
import crypto from 'crypto';

export const actions = {
  default: async ({ request, cookies }) => {
    const data = await request.formData();
    const username = data.get('username');
    const password = data.get('password');

    console.log('Login attempt:', { username, password });

    const statement = database.prepare('SELECT * FROM users WHERE username = ?');
    const user = statement.get(username);

    console.log('User found:', user);

    if (!user) {
      return fail(400, { error: 'Invalid username or password' });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    console.log('Password match:', passwordMatch);

    if (!passwordMatch) {
      return fail(400, { error: 'Invalid username or password' });
    }

    const token = crypto.randomBytes(32).toString('hex');
    database.prepare('UPDATE users SET token = ? WHERE id = ?').run(token, user.id);

    cookies.set('token', token, {
      path: '/',
      httpOnly: true,
      secure: false,
      sameSite: 'strict',
      maxAge: 60 * 60 * 24
    });

    throw redirect(303, '/');
  }
};
