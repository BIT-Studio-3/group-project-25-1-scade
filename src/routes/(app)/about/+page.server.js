export const actions = {
	submit: async ({ request , cookies }) => {
		const data = await request.formData();
        const name = data.get('name');
        const email = data.get('email');
		const message = data.get('message');
		console.log("Form submitted:", { name, email, message });



		// Set the values as cookies
		cookies.set('name', name, { path: '/', maxAge: 86400 });
		cookies.set('email', email, { path: '/', maxAge: 86400 });
		cookies.set('message', message, { path: '/', maxAge: 86400 });

		return {
			success: true,
			message: "Form received!"
		};
	}
};
