import type { PageLoad } from './$types';

import Page1 from './imports/book1';
import Page2 from './imports/book2';

export const load: PageLoad = async ({ params }) => {
	let pages: Array<Array<{ src: string; w: number }>> = [];
	switch (params.book) {
		case '1':
			pages = Page1;
			break;
		case '2':
			pages = Page2;
			break;
		default:
			pages = Page1;
	}
	return {
		pages
	};
};
