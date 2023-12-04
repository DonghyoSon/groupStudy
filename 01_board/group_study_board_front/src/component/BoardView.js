import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const BoardView = (props) => {
  const user = props.user;
  const loginStatus = props.loginStatus;
  const navigate = useNavigate();
  const location = useLocation();
  const boardNo = location.state.boardNo;
  const [board, setBoard] = useState({});

  //게시글 번호를 통해 서버로부터 해당 게시글을 가져옴
  useEffect(() => {
    axios
      .get("/board/boardView/" + boardNo)
      .then((res) => {
        console.log(res.data);
        setBoard(res.data);
      })
      .catch((res) => {
        console.log(res.data);
      });
  }, {});

  //게시판 목록으로 돌아가는 함수
  const toBoardList = () => {
    navigate("/boardList");
  };

  //게시글을 삭제하는 함수
  const boardDelete = () => {
    if (window.confirm("게시글을 삭제하시겠습니까?")) {
    }
    axios
      .get("/board/boardDelete/" + boardNo)
      .then((res) => {
        console.log(res.data);
        alert("삭제가 완료되었습니다.");
        navigate("/boardList");
      })
      .catch((res) => {
        console.log(res.data);
      });
  };

  return (
    <>
      <h3>게시판</h3>
      <table border={1}>
        <tbody>
          <tr>
            <td rowSpan={2}>{board.boardTitle}</td>
            <td>{board.boardRegDate}</td>
          </tr>
          <tr>
            <td>{board.userName}</td>
          </tr>
          <tr>
            <td colSpan={2}>{board.boardContent}</td>
          </tr>
        </tbody>
      </table>
      <div>
        {loginStatus === true ? (
          <>
            {user.userNo === board.userNo ? (
              <>
                <button>수정</button>&nbsp;
                <button onClick={boardDelete}>삭제</button>&nbsp;
              </>
            ) : (
              ""
            )}
          </>
        ) : (
          ""
        )}
        <button onClick={toBoardList}>목록으로</button>
      </div>
    </>
  );
};

export default BoardView;
