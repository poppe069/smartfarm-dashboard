import { e as error, t as text } from "../../../../chunks/index.js";
import { g as getBoardWithLatestResult, a as getBoard, c as createResult } from "../../../../chunks/result.js";
async function GET() {
  try {
    const backend = await getBoardWithLatestResult();
    return new Response(JSON.stringify(backend), { status: 200 });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ result: "fail" }), { status: 500 });
  }
}
async function POST({ request }) {
  try {
    const { api_key, board_id, air_humid, light, soil_humid, temp } = await request.json();
    const num_board_id = parseInt(board_id);
    const isValidApiKey = await getBoard(api_key, num_board_id);
    console.log("validate count: " + isValidApiKey);
    if (isValidApiKey <= 0) {
      throw error(401, "Unauthorized - Invalid API key");
    }
    const newRecord = {
      air_humid,
      board_id: num_board_id,
      light,
      soil_humid,
      temperature: temp
    };
    createResult(newRecord);
    return new Response(JSON.stringify({ result: "success" }));
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ result: "fail" }));
  }
}
const fallback = async ({ request }) => {
  return text(`Currently does not support ${request.method} request!`);
};
export {
  GET,
  POST,
  fallback
};
