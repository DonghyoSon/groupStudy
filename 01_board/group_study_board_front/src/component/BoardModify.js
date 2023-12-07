import { useLocation } from "react-router-dom";
import BoardFrm from "./BoardFrm";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const BoardModify = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const board = location.state.board;
  console.log(board);
  const boardNo = board.boardNo;
  const [boardTitle, setBoardTitle] = useState(board.boardTitle);
  const [boardContent, setBoardContent] = useState(board.boardContent);

  //게시글 수정 함수
  const modifyBoard = () => {
    console.log(boardTitle);
    console.log(boardContent);
    console.log(boardNo.boardNo);
    const modifiedBoard = { boardNo, boardTitle, boardContent };
    axios
      .post("/board/modifyBoard", modifiedBoard)
      .then((res) => {
        console.log(res.data);
        alert("게시글 수정이 완료되었습니다.");
        navigate("/boardView", { state: { boardNo: board.boardNo } }); //state로 boardNo값을 넘겨, 해당 글로 되돌아감
      })
      .catch((res) => {
        console.log(res.data);
        alert("게시글 수정을 실패하였습니다.");
      });
  };

  //수정 취소 함수
  const cancelModify = () => {
    if (window.confirm("게시글 수정을 취소하시겠습니까?")) {
      navigate("/boardView", { state: { boardNo: board.boardNo } }); //state로 boardNo값을 넘겨, 해당 글로 되돌아감
    }
  };

  return (
    <>
      <BoardFrm
        boardTitle={boardTitle}
        setBoardTitle={setBoardTitle} //set변수를 넘기지 않으면 수정이 되지 않음
        boardContent={boardContent}
        setBoardContent={setBoardContent}
      />
      <div>
        <button onClick={modifyBoard}>수정하기</button>&nbsp;
        <button onClick={cancelModify}>취소</button>
      </div>
    </>
  );
};

export default BoardModify;
