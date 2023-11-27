import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();

  //메인으로 돌아가는 함수
  const toMain = () => {
    return navigate("/");
  };

  return (
    <>
      <h3>회원가입</h3>
      <div>
        <input type="text" placeholder="아이디" />
        <br />
        <input type="password" placeholder="비밀번호" />
        <br />
        <input type="text" placeholder="이름" />
      </div>
      <div>
        <button>회원가입</button>
        &nbsp;
        <button onClick={toMain}>취소</button>
      </div>
    </>
  );
};

export default SignUp;
