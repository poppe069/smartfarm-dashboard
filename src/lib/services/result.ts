import db from '$lib/server/database';
import { error } from '@sveltejs/kit';

type Result = {
	air_humid: string;
	light: string;
	soil_humid: string;
	board_id: number;
	temperature: string;
	createdAt: Date;
};

export async function getBoardWithLatestResult() {
	const output = await db.board.findMany({
		orderBy: { id: 'asc' },
		include: {
			Result: {
				orderBy: { createdAt: 'desc' },
				take: 1 // Retrieve only the latest result
			}
		}
	});

	return output;
}

export async function getBoard(api_key: string, _board_id: number) {
	return await db.board.count({
		where: {
			api_key,
			id: _board_id
		}
	});
}

export async function createResult(result: Result) {
	try {
		await db.result.create({
			data: {
				air_humid: result.air_humid,
				light: result.light,
				soil_humid: result.soil_humid,
				board_id: result.board_id,
				temperature: result.temperature
			}
		});
	} catch (err) {
		console.error(err);
		throw error(500, 'Cannot create new record');
	}
}
