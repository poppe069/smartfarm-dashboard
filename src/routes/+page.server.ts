import * as result from '$lib/services/result';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const getBoards = async () => {
		return result.getBoardWithLatestResult();
	};

	return {
		boards: getBoards()
	};
};
