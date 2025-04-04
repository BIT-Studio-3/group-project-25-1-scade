import { redirect } from '@sveltejs/kit';

export function load({ cookies }) {
	if (!cookies.get('token')) {
		redirect(308, '/login');
	}
}