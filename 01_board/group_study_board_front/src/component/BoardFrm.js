import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const BoardFrm = (props) => {
  const user = props.user;
  const navigate = useNavigate();
  const [boardTitle, setBoardTitle] = useState("");
  const [boardContent, setBoardContent] = useState("");

  //백으로 글쓰기 내용 전송
  const insertBoard = () => {
    const userNo = user.userNo;
    const board = { boardTitle, boardContent, userNo };
    axios
      .post("/board/insertBoard", board)
      .then((res) => {
        console.log(res.data);
      })
      .catch((res) => {
        console.log(res.data);
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
      <table>
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
