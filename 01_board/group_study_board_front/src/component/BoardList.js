import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

const BoardList = (props) => {
  const user = props.user;
  const navigate = useNavigate();
  const [boardList, setBoardList] = useState([]);

  //게시글 페이지가 로드 되면 백으로부터 게시글 리스트를 받아옴
  useEffect(() => {
    axios
      .get("/board/boardList")
      .then((res) => {
        console.log(res.data);
        setBoardList(res.data);
      })
      .catch((res) => {
        console.log(res.data);
      });
  }, []);

  //메인으로 이동하는 함수
  const toMain = () => {
    navigate("/");
  };

  //글쓰기 함수
  const write = () => {
    navigate("/boardFrm");
  };

  return (
    <>
      <h3>게시판</h3>
      <table border={1}>
        <thead>
          <tr>
            <th>글번호</th>
            <th>제목</th>
            <th>작성자</th>
            <th>등록일</th>
          </tr>
        </thead>
      </table>
      {boardList.map((board, index) => {
        return <BoardListObj key={"board" + index} boardList={boardList} />;
      })}
      <div>
        <button onClick={write}>글쓰기</button>
        &nbsp;
        <button onClick={toMain}>메인으로</button>
      </div>
    </>
  );
};

const BoardListObj = (props) => {
  const boardList = props.boardList;
  return (
    <>
      <tbody>
        <td>{boardList.boardNo}</td>
        <td>{boardList.boardTitle}</td>
        <td>{boardList.userNo}</td>
        <td>{boardList.boardRegDate}</td>
      </tbody>
    </>
  );
};

export default BoardList;
