import{cookies, redirect} from '@sveltejs/kit';
if (!cookies.get('user')) 
{
    redirect(303, '/login');
}