import { redirect } from "@sveltejs/kit";

export const actions = {
    login: async ({ request, cookies }) => {

        const data = await request.formData();
        const username = data.get('username');
        const password = data.get('password');

        cookies.set('user', username , { path: '/', maxAge: 86400 });

        if (cookies.get('user')) {
            redirect(303, '/');
        }
        return { success: true };
    }
};