import { redirect } from '@sveltejs/kit';

export function load({ cookies }) {
	if (!cookies.get('user')) {
		redirect(308, '/login');
	}
}