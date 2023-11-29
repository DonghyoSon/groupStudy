import { Link } from "react-router-dom";

const Header = (props) => {
  const loginStatus = props.loginStatus;
  const setLoginStatus = props.setLoginStatus;

  console.log("로그인 상태:", loginStatus);

  return (
    <header>
      <Member loginStatus={loginStatus} setLoginStatus={setLoginStatus} />
    </header>
  );
};

const Member = (props) => {
  const loginStatus = props.loginStatus;
  const setLoginStatus = props.setLoginStatus;

  //로그아웃 함수
  const signOut = () => {
    setLoginStatus(false);
  };

  return (
    <>
      {loginStatus === false ? (
        <>
          <span>
            <Link to="/signIn">로그인</Link>
          </span>
          &nbsp;
          <span>
            <Link to="/signUp">회원가입</Link>
          </span>
          <hr></hr>
        </>
      ) : (
        <>
          <span>
            <Link to="/myPage">마이페이지</Link>
          </span>
          &nbsp;
          <span>
            <Link to="#" onClick={signOut}>
              로그아웃
            </Link>
          </span>
          <hr></hr>
        </>
      )}
    </>
  );
};

export default Header;
