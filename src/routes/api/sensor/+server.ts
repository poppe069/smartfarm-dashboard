import { error, text } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import * as result from '$lib/services/result';
import type { Result } from '@prisma/client';

/**
 * GET handler that returns the latest sensor reading result for each board.
 *
 * Fetches all boards with their latest associated sensor reading result from the database.
 * Returns the aggregated latest result for each board in the response.
 */
export async function GET() {
	try {
		const backend = await result.getBoardWithLatestResult();
		// console.log(backend);
		return new Response(JSON.stringify(backend), { status: 200 });
	} catch (err) {
		console.error(err);
		return new Response(JSON.stringify({ result: 'fail' }), { status: 500 });
	}
}

/**
 * POST handler that accepts sensor reading data and saves it to the database.
 *
 * Authenticates the request using the provided API key.
 * Extracts the sensor data from the request body.
 * Converts the board ID to a number.
 * Validates the API key matches the board ID.
 * Creates a new database record with the sensor data.
 * Returns a success or failure response.
 */
export async function POST({ request }) {
	try {
		// Extract data from request body
		const { api_key, board_id, air_humid, light, soil_humid, temp } = await request.json();

		// Convert board_id to Number
		const num_board_id = parseInt(board_id);

		// Authenticate base on the provided API key
		const isValidApiKey = await result.getBoard(api_key, num_board_id);
		console.log('validate count: ' + isValidApiKey);
		if (isValidApiKey <= 0) {
			throw error(401, 'Unauthorized - Invalid API key');
		}

		const newRecord: Result = {
			air_humid,
			board_id: num_board_id,
			light,
			soil_humid,
			temperature: temp
		};

		// Create a new result record in the database
		result.createResult(newRecord);

		return new Response(JSON.stringify({ result: 'success' }));
	} catch (err) {
		console.error(err);

		return new Response(JSON.stringify({ result: 'fail' }));
	}
}

// This handler will respond to PUT, PATCH, DELETE, etc.
export const fallback: RequestHandler = async ({ request }) => {
	return text(`Currently does not support ${request.method} request!`);
};
