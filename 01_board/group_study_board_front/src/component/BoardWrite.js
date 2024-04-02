import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import BoardFrm from "./BoardFrm";

const BoardWrite = (props) => {
  const user = props.user;
  const navigate = useNavigate();
  const [boardTitle, setBoardTitle] = useState("");
  const [boardContent, setBoardContent] = useState("");

  //백으로 글쓰기 내용 전송 함수
  const insertBoard = () => {
    const userNo = user.userNo;
    const board = { boardTitle, boardContent, userNo }; //{boardTitle, boardContent, user.userNo}는 불가능
    axios
      .post("/board/insertBoard", board)
      .then((res) => {
        console.log(res.data);
        alert("게시글 등록 완료");
        navigate("/boardList");
      })
      .catch((res) => {
        console.log(res.data);
        alert("게시글 등록 실패");
      });
  };

  //글쓰기 취소 함수
  const cancel = () => {
    if (window.confirm("게시글 작성을 취소하시겠습니까?")) {
      navigate("/boardList");
    }
  };

  return (
    <>
      <BoardFrm
        buttonEvent={insertBoard}
        boardTitle={boardTitle}
        setBoardTitle={setBoardTitle}
        boardContent={boardContent}
        setBoardContent={setBoardContent}
      />
      <div className="board-btn">
        <button onClick={insertBoard}>등록</button>
        &nbsp;
        <button onClick={cancel}>취소</button>
      </div>
    </>
  );
};

export default BoardWrite;
