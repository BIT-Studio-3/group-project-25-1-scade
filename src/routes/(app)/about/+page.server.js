export const actions = {
	default: async ({ request , cookies }) => {
		const formData = await request.formData();
		const name = formData.get('name');
		const email = formData.get('email');
		const message = formData.get('message');

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
