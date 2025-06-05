import { redirect } from "@sveltejs/kit";
import database from '../(login)/login/database.js';

export async function load({ cookies }) {
  const token = cookies.get('token');

  if (!token) throw redirect(303, '/login');

  const statement = database.prepare('SELECT * FROM users WHERE token = ?');
  const user = statement.get(token);

  if (!user) throw redirect(303, '/login');

  return { user };
}
