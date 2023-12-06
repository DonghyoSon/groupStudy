import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const BoardFrm = (props) => {
  const boardTitle = props.boardTitle;
  const setBoardTitle = props.setBoardTitle;
  const boardContent = props.boardContent;
  const setBoardContent = props.setBoardContent;

  //글쓰기 양식에 입력되는 값을 boardTitle, boardContent에 대입
  const changeBoardTitle = (e) => {
    const inputTitle = e.currentTarget.value;
    setBoardTitle(inputTitle);
    // console.log(boardTitle);
  };
  const changeBoardContent = (e) => {
    const inputContent = e.currentTarget.value;
    setBoardContent(inputContent);
    // console.log(boardContent);
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
    </>
  );
};

export default BoardFrm;
