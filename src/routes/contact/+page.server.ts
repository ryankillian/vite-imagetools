// @ts-nocheck
import { GOOGLE_FORM } from '$env/static/private';
import { fail } from '@sveltejs/kit';
import type { z, ZodError } from 'zod';
import type { Actions } from './$types';

import { contactSchema } from './schema';

type Contact = z.infer<typeof contactSchema>;
interface ContactActionData {
	data?: Contact;
	errors?: z.inferFlattenedErrors<typeof contactSchema>['fieldErrors'];
	success?: boolean;
}

export const actions: Actions = {
	default: async ({ request }): Promise<ContactActionData> => {
		const formData = Object.fromEntries(await request.formData());

		try {
			const { username, email, message } = contactSchema.parse(formData);

			try {
				let prefilled: string = `https://docs.google.com/forms/d/e/${GOOGLE_FORM}/formResponse?usp=pp_url&entry.1568346612=${username}&entry.1473364025=${email}&entry.1713892695=${message}&submit=Submit`;

				const res = await fetch(prefilled);
			} catch (err) {
				console.log(err);
			}
		} catch (err) {
			const { fieldErrors: errors } = (err as ZodError).flatten();
			const data = formData as {
				message: string;
				name: string;
				email: string;
			};
			return fail(400, {
				data,
				errors
			});
		}

		return {
			success: true
		};
	}
};
