export const actions = {
    login: async ({ cookies }) => {
        cookies.set('user', 'user', { path: '/', maxAge: 86400 });
        return { success: true };
    }
};
