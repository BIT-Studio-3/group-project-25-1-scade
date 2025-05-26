import { redirect, fail } from "@sveltejs/kit";
import bcrypt from 'bcrypt';
import database from './database.js';
import crypto from 'crypto';

export const actions = {
  login: async ({ request, cookies }) => {
    const data = await request.formData();
    const username = data.get('username');
    const password = data.get('password');

    console.log('Login attempt:', username);

    const statement = database.prepare('SELECT * FROM users WHERE username = ?');
    console.log("output is" + statement);
    const user = statement.get(username);

    if (!user) {
      console.log('User not found');
      return fail(400, { error: 'Invalid username or password' });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      console.log('Password mismatch');
      return fail(400, { error: 'Invalid username or password' });
    }

    const token = crypto.randomBytes(32).toString('hex');
    database.prepare('UPDATE users SET token = ? WHERE id = ?').run(token, user.id);

    cookies.set('token', token, {
      path: '/',
      httpOnly: true,
      secure: false, // false for localhost development
      sameSite: 'strict',
      maxAge: 60 * 60 * 24
    });

    console.log('Login successful, token set:', token);

    throw redirect(303, '/');
  }
};
