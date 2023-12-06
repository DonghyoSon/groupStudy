import { useLocation } from "react-router-dom";
import BoardFrm from "./BoardFrm";
import axios from "axios";

const BoardModify = () => {
  const location = useLocation();
  const boardTitle = location.state.boardTitle;
  const boardContent = location.state.boardContent;
  const userNo = location.state.userNo;

  console.log(boardTitle);
  console.log(boardContent);
  console.log(userNo);

  //게시글 수정 함수
  const modifyBoard = () => {
    axios.get().then().catch();
  };

  return (
    <>
      <BoardFrm boardTitle={boardTitle} boardContent={boardContent} />
      <div>
        <button onClick={modifyBoard}>수정하기</button>&nbsp;
        <button>취소</button>
      </div>
    </>
  );
};

export default BoardModify;
