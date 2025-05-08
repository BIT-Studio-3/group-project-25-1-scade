/** @type {import('./$types').Actions} */
export const actions = {
	default: async ({ request }) => {
	  const formData = await request.formData();
	  const name = formData.get('name');
	  const email = formData.get('email');
	  const message = formData.get('message');
	  console.log("Form submitted:", { name, email, message });
  
	  return {
		success: true,
		message: "Form received!"
	  };
	}
  };