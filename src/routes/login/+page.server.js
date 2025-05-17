//todo
//add response if incorrect login

import { redirect } from "@sveltejs/kit";

//hardcoded users
const users = [
    {
        username: 'daniel',
        password: 'admin1',
        token: 'token1',
    },
    {
        username: 'saskia',
        password: 'admin2',
        token: 'token2',
    },
    {
        username: 'edward',
        password: 'admin3',
        token: 'token3',
    },
    {
        username: 'aston',
        password: 'admin4',
        token: 'token4',
    }
  ];

export const actions = {
    login: async ({ request, cookies }) => {

        //pulls form data and saves them as variables
        const data = await request.formData();
        const username = data.get('username');
        const password = data.get('password');
        
        //checks for matching username then matching password
        const user = users.find(u => u.username === username);
        if (!user || user.password !== password) {
            return fail(400, { error: 'Invalid username or password' });
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