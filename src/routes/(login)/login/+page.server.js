//todo
//instead of checking if the user cookie exists check it against a list of hard coded users and passwords

import { redirect } from "@sveltejs/kit";

export const actions = {
    login: async ({ request, cookies }) => {

        //pulls form data and saves them as variables
        const data = await request.formData();
        const username = data.get('username');
        const password = data.get('password');

        //sets the variables as cookies
        cookies.set('user', username , { path: '/', maxAge: 86400 });

        //checks if the user variable exists
        if (cookies.get('user')) {
            redirect(303, '/');
        }
        
        return { success: true };
    }
};