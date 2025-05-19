import { redirect } from '@sveltejs/kit';
import database from '../src/routes/login/database';

export async function handle({ event, resolve }) {
    // Check if the request requires authentication
    const token = event.cookies.get('token');

    if (!token) {
        // If there's no token, redirect to the login page
        if (event.url.pathname !== '/login') {
            // Only redirect if it's not the login page
            throw redirect(303, '/login');
        }
    } else {
        // Check if the token exists in the database
        const statement = database.prepare('SELECT * FROM users WHERE token = ?');
        const user = statement.get(token);

        if (!user) {
            // If no user with the token is found, redirect to login page
            throw redirect(303, '/login');
        }
    }

    // If everything is okay, continue with the request
    return resolve(event);
}
