import { redirect } from "@sveltejs/kit";

export const actions = {
    login: async ({ request, cookies }) => {
        const data = await request.formData();
        const username = data.get('username');
        const password = data.get('password');
        console.log(JSON.stringify({ username }));
        let name = username;
        
        cookies.set('user', username , { path: '/', maxAge: 86400 });
        return { success: true };
    }
};
