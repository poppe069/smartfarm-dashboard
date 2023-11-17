import { error, text } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import * as result from '$lib/services/result';
import type { Result } from '@prisma/client';

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
