import { redirect } from '@sveltejs/kit';
import database from '$routes/login/database.js';

//deleates the sessions token
export const GET = async ({ cookies }) => {
    const token = cookies.get('token');

    if (token) {
        database.prepare('UPDATE users SET token = NULL WHERE token = ?').run(token);
    }

    cookies.delete('token', { path: '/' });
    throw redirect(303, '/login');
};