import { g as getBoardWithLatestResult } from "../../chunks/result.js";
const load = async () => {
  const getBoards = async () => {
    return getBoardWithLatestResult();
  };
  return {
    boards: getBoards()
  };
};
export {
  load
};
