import { redirect, fail } from "@sveltejs/kit";
import bcrypt from 'bcrypt';
import database from '$routes/login/database.js';

// //hardcoded users
// const users = [
//     {
//         username: 'daniel',
//         password: 'admin1',
//         token: 'token1',
//     },
//     {
//         username: 'saskia',
//         password: 'admin2',
//         token: 'token2',
//     },
//     {
//         username: 'edward',
//         password: 'admin3',
//         token: 'token3',
//     },
//     {
//         username: 'aston',
//         password: 'admin4',
//         token: 'token4',
//     }
//   ];

export const actions = {
    login: async ({ request, cookies }) => {

        //pulls form data and saves them as variables
        const data = await request.formData();
        const username = data.get('username');
        const password = data.get('password');
        
        // Get user from DataBase
        const statment = database.prepare('SELECT * FROM users WHERE username = ?');
        const user = statment.get(username);
        if (!user) {
            return fail(400, { error: 'Invalid username or password'});
        }

        //for if you use the correct password
        const passwordMatch = await bcrypt.compare(password, user.password);

        //if the password entered is invalid
        if (!passwordMatch) {
            return fail(400, {error: 'Invalid username or password'});
        }

        // Set session cookie
        cookies.set('token', user.token, {
            path: '/',
            httpOnly: true,
            maxAge: 60 * 60 * 24 // 1 day
        });

        // Redirect after login
        throw redirect(303, '/');
    }
};