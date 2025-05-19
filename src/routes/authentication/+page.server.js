import { redirect } from '@sveltejs/kit';
import database from '../login/database';

export const load = async ({ cookies }) => {
    // Get the token from the cookies
    const token = cookies.get('token');

    if (!token) {
        // If no token is found, redirect to the login page
        throw redirect(303, '/login');
    }

    // Check if the token exists in the database
    const statement = database.prepare('SELECT * FROM users WHERE token = ?');
    const user = statement.get(token);

    if (!user) {
        // If no matching user is found, redirect to login page
        throw redirect(303, '/login');
    }

    // If the user is found, return the user data to the page
    return { user };
};