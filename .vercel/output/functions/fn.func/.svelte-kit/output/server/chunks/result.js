import { PrismaClient } from "@prisma/client";
import { e as error } from "./index.js";
const db = new PrismaClient();
async function getBoardWithLatestResult() {
  const output = await db.board.findMany({
    orderBy: { id: "asc" },
    include: {
      Result: {
        orderBy: { createdAt: "desc" },
        take: 1
        // Retrieve only the latest result
      }
    }
  });
  return output;
}
async function getBoard(api_key, _board_id) {
  return await db.board.count({
    where: {
      api_key,
      id: _board_id
    }
  });
}
async function createResult(result) {
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
    throw error(500, "Cannot create new record");
  }
}
export {
  getBoard as a,
  createResult as c,
  getBoardWithLatestResult as g
};
