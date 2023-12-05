import { useLocation } from "react-router-dom";

const BoardModify = () => {
  const location = useLocation();
  const board = location.state.board;
  console.log(board);
};

export default BoardModify;
