import { redirect, fail } from "@sveltejs/kit";
import bcrypt from 'bcrypt';
import database from './database.js';
import crypto from 'crypto';

export const actions = {
    login: async ({ request, cookies }) => {

        //pulls form data and saves them as variables
        const data = await request.formData();
        const username = data.get('username');
        const password = data.get('password');
        
        // Get user from DataBase and check if they exist
        const statment = database.prepare('SELECT * FROM users WHERE username = ?');
        const user = statment.get(username);
        if (!user) {
            return fail(400, { error: 'Invalid username or password'});
        }

        //Generate new token on login
        const token = crypto.randomBytes(32).toString('hex');

        //Store it in the DB
        database.prepare('UPDATE users SET token = ? WHERE id = ?').run(token, user.id);

        //for if you use the correct password
        const passwordMatch = await bcrypt.compare(password, user.password);
        //if the password entered is invalid
        if (!passwordMatch) {
            return fail(400, {error: 'Invalid username or password'});
        }

        // Set session cookie
        cookies.set('token', token, {
            path: '/',
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            maxAge: 60 * 60 * 24 // 1 day
        });

        // Redirect after login
        throw redirect(303, '/');
    }
};