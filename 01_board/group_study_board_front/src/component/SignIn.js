import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();

  //메인으로 돌아가는 함수
  const toMain = () => {
    return navigate("/");
  };

  return (
    <>
      <h3>로그인</h3>
      <div>
        <input type="text" placeholder="아이디" />
        <br />
        <input type="password" placeholder="비밀번호" />
      </div>
      <div>
        <button>로그인</button>
        &nbsp;
        <button onClick={toMain}>취소</button>
      </div>
    </>
  );
};

export default SignIn;
