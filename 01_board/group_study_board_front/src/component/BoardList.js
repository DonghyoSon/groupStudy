import { useNavigate } from "react-router-dom";

const BoardList = (props) => {
  const user = props.user;
  const navigate = useNavigate();

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
        <tbody></tbody>
      </table>
      <div>
        <button onClick={write}>글쓰기</button>
        &nbsp;
        <button onClick={toMain}>메인으로</button>
      </div>
    </>
  );
};

export default BoardList;
