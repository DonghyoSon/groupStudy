import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Pagination from "./Pagination";
import "./board.css";

const BoardList = (props) => {
  const user = props.user;
  const loginStatus = props.loginStatus;
  const navigate = useNavigate();
  const [boardList, setBoardList] = useState([]);

  //페이지 네비게이션에 필요한 변수
  const [reqPage, setReqPage] = useState(1); //페이지는 1로 시작
  const [page, setPage] = useState({});

  //게시글 페이지가 로드 되면 백으로부터 게시글 리스트를 받아옴
  /*
  //페이지 기능 미포함
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
  */
  //페이지 기능 포함
  useEffect(() => {
    axios
      .get("/board/boardList/" + reqPage)
      .then((res) => {
        console.log(res.data);
        setBoardList(res.data.boardList);
        setPage(res.data.p);
      })
      .catch((res) => {
        console.log(res.data);
      });
  }, [reqPage]); //reqPage가 변경될 때마다 서버로부터 게시물 목록을 받아옴

  //메인으로 이동하는 함수
  const toMain = () => {
    navigate("/");
  };

  //글쓰기 함수
  const write = () => {
    navigate("/boardWrite");
  };

  return (
    <>
      <h3>게시판</h3>
      <div className="whole-rap">
        <table>
          <thead>
            <tr>
              <th>글번호</th>
              <th>제목</th>
              <th>작성자</th>
              <th>등록일</th>
            </tr>
          </thead>
          {boardList.map((boardList, index) => {
            return <BoardListObj key={"board" + index} boardList={boardList} />;
          })}
        </table>
        <div className="board-btn">
          {loginStatus === true ? (
            <>
              <button onClick={write}>글쓰기</button>&nbsp;
            </>
          ) : (
            ""
          )}
          <button onClick={toMain}>메인으로</button>
        </div>
        <div className="pagenation">
          <Pagination reqPage={reqPage} setReqPage={setReqPage} page={page} />
        </div>
      </div>
    </>
  );
};

const BoardListObj = (props) => {
  const boardList = props.boardList;
  const navigate = useNavigate();

  //게시글 상세보기로 이동하는 함수
  const toBoardView = () => {
    navigate("/boardView", { state: { boardNo: boardList.boardNo } });
  };

  return (
    <>
      <tbody>
        <td>{boardList.boardNo}</td>
        <td onClick={toBoardView}>{boardList.boardTitle}</td>
        <td>{boardList.userName}</td>
        <td>{boardList.boardRegDate}</td>
      </tbody>
    </>
  );
};

export default BoardList;
