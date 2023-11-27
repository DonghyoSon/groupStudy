import { Link } from "react-router-dom";

const Header = (props) => {
  const loginStatus = props.loginStatus;
  const setLoginStatus = props.setLoginStatus;

  return (
    <header>
      <Member loginStatus={loginStatus} setLoginStatus={setLoginStatus} />
    </header>
  );
};

const Member = (props) => {
  const loginStatus = props.loginStatus;
  const setLoginStatus = props.setLoginStatus;

  return (
    <>
      {loginStatus === false ? (
        <>
          <span>
            <Link to="/signIn">로그인</Link>
          </span>
          <span>&nbsp;</span>
          <span>
            <Link to="/signUp">회원가입</Link>
          </span>
          <hr></hr>
        </>
      ) : (
        <>
          <span>
            <Link to="#">마이페이지</Link>
          </span>
          <span>&nbsp;</span>
          <span>
            <Link to="#">로그아웃</Link>
          </span>
          <hr></hr>
        </>
      )}
    </>
  );
};

export default Header;
