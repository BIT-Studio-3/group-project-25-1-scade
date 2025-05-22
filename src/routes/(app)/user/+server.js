export function GET({ cookies }) {
    // Delete the token cookie
    cookies.set('token', '', {
        path: '/',
        expires: new Date(0),
        maxAge: 0,
        httpOnly: true,
        sameSite: 'strict',
        secure: false // set to true if you're using HTTPS
    });

    // Redirect to homepage
    return new Response(null, {
        status: 303,
        headers: {
            Location: '/'
        }
    });
}
