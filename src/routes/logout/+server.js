import { redirect } from '@sveltejs/kit';

//deleates the sessions token
export const GET = async ({ cookies }) => {
    cookies.delete('token', { path: '/' });
    throw redirect(303, '/login');
};