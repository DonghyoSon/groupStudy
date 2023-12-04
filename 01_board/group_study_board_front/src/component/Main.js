import { Link } from "react-router-dom";

const Main = (props) => {
  const user = props.user;
  const loginStatus = props.loginStatus;

  return (
    <>
      {loginStatus === true ? <div>{user.userName}님 환영합니다.</div> : ""}
      <h3>메인페이지</h3>
      <div>
        <Link to="/boardList">게시판</Link>
      </div>
    </>
  );
};

export default Main;
