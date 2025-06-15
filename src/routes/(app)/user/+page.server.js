export const actions = {
    logout: async ({ cookies }) => {
        cookies.set('token', '', { path: '/', maxAge: 0 });
        throw redirect(303, '/login');
    }
};