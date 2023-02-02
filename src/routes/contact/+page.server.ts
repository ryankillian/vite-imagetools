import type { Actions } from './$types';

export const actions: Actions = {
	default: async ({ request }) => {
		const { name, email, message } = Object.fromEntries(await request.formData()) as {
			name: string;
			email: string;
			message: string;
		};
	}
};
