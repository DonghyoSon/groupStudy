import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const SignUp = () => {
  const navigate = useNavigate();
  const [userId, setUserId] = useState("");
  const [userPw, setUserPw] = useState("");
  const [userName, setUserName] = useState("");

  const signUp = () => {
    console.log(userId);
    console.log(userPw);
    console.log(userName);
    const user = { userId, userPw, userName };

    axios
      .post("/user/signUp", user)
      .then((res) => {
        if (res.data === 1) {
          console.log(res.data);
          alert("회원가입 완료");
        } else {
          console.log(res.data);
          alert("회원가입 실패");
        }
      })
      .catch((res) => {
        console.log(res.data);
      });
  };

  //메인으로 돌아가는 함수
  const toMain = () => {
    return navigate("/");
  };

  //<input onChange={set변수명} /> 불가
  const changeUserId = (e) => {
    const inputId = e.currentTarget.value;
    setUserId(inputId);
  };
  const changeUserPw = (e) => {
    const inputPw = e.currentTarget.value;
    setUserPw(inputPw);
  };
  const changeUserName = (e) => {
    const inputName = e.currentTarget.value;
    setUserName(inputName);
  };

  return (
    <>
      <h3>회원가입</h3>
      <div>
        <input
          type="text"
          value={userId}
          onChange={changeUserId}
          placeholder="아이디"
        />
        <br />
        <input
          type="password"
          value={userPw}
          onChange={changeUserPw}
          placeholder="비밀번호"
        />
        <br />
        <input
          type="text"
          value={userName}
          onChange={changeUserName}
          placeholder="이름"
        />
      </div>
      <div>
        <button onClick={signUp}>회원가입</button>
        &nbsp;
        <button onClick={toMain}>취소</button>
      </div>
    </>
  );
};

export default SignUp;
