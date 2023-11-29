import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const SignUp = () => {
  const navigate = useNavigate();
  const [userId, setUserId] = useState("");
  const [userPw, setUserPw] = useState("");
  const [userName, setUserName] = useState("");

  //회원가입 함수
  const signUp = () => {
    console.log(userId);
    console.log(userPw);
    console.log(userName);
    const user = { userId, userPw, userName }; //서버로 전달하기 위해, 유저 정보를 객체화

    axios
      .post("/user/signUp", user)
      .then((res) => {
        console.log(res.data);
        if (res.data === 1) {
          alert("회원가입 완료");
          navigate("/");
        } else {
          alert("회원가입 실패");
        }
      })
      .catch((res) => {
        alert("회원가입 실패");
        console.log(res.data);
      });
  };

  //메인으로 돌아가는 함수
  const toMain = () => {
    return navigate("/");
  };

  //<input>태그에 입력되는 값을 세팅하기 위한 함수들 /<input onChange={set변수명} /> 불가
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
