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

/**
 * Retrieves all boards, ordered by ID, and includes only
 * the latest result for each board ordered by createdAt date.
 *
 * This returns boards with their latest result.
 */
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

/**
 * Counts the number of boards that match the given API key and board ID.
 * Used to check if a board exists before allowing access.
 *
 * @param api_key - The API key to authenticate the request
 * @param _board_id - The ID of the board to check for
 * @returns The number of matching boards (0 or 1)
 */
export async function getBoard(api_key: string, _board_id: number) {
	return await db.board.count({
		where: {
			api_key,
			id: _board_id
		}
	});
}

/**
 * Creates a new result record in the database
 *
 * @param result - The result data to save
 * @throws Will throw an error if the record could not be created
 */
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
