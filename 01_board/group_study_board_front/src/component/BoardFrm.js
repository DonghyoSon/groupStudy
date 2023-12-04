import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

const BoardFrm = (props) => {
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
    navigate("/boardList");
  };

  //글쓰기 양식에 입력되는 값을 boardTitle, boardContent에 대입
  const changeBoardTitle = (e) => {
    const inputTitle = e.currentTarget.value;
    setBoardTitle(inputTitle);
  };
  const changeBoardContent = (e) => {
    const inputContent = e.currentTarget.value;
    setBoardContent(inputContent);
  };

  return (
    <>
      <h3>게시판</h3>
      <table border={1}>
        <tbody>
          <tr>
            <td>
              <input
                type="text"
                value={boardTitle}
                onChange={changeBoardTitle}
                placeholder="제목을 입력하세요."
              />
            </td>
          </tr>
          <tr>
            <td>
              <textarea
                value={boardContent}
                onChange={changeBoardContent}
                placeholder="내용을 입력하세요."
              />
            </td>
          </tr>
        </tbody>
      </table>
      <div>
        <button onClick={insertBoard}>등록</button>
        &nbsp;
        <button onClick={cancel}>취소</button>
      </div>
    </>
  );
};

export default BoardFrm;
