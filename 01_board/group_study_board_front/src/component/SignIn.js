import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import "./account.css";

const SignIn = (props) => {
  const navigate = useNavigate();
  const [userId, setUserId] = useState("");
  const [userPw, setUserPw] = useState("");
  const setLoginStatus = props.setLoginStatus;
  const setUser = props.setUser;

  //로그인 함수
  const signIn = () => {
    console.log("입력된 아이디:", userId);
    console.log("입력된 비밀번호:", userPw);
    const user = { userId, userPw };
    axios
      .post("/user/signIn", user)
      .then((res) => {
        console.log(
          "백엔드에서 반환된 데이터의 자료형:",
          typeof res.data,
          res.data
        ); //DB에서 null값을 반환할 경우 문자열 ""로 인식함, 조회에 성공하여 객체를 반환할 경우, 객체로 인식함
        if (res.data === "") {
          alert("아이디 또는 비밀번호가 일치하지 않습니다.");
        } else {
          setLoginStatus(true); //로그인 여부 상태 변경
          setUser(res.data); //user변수에 백에서 반환된 객체를 대입
          navigate("/"); //로그인 완료 후 메인으로 이동
        }
      })
      .catch((res) => {
        console.log(res.data);
        alert("로그인 실패");
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

  return (
    <>
      <h3>로그인</h3>
      <div className="input-area">
        <input
          type="text"
          value={userId}
          onChange={changeUserId}
          placeholder="아이디"
          className="input-id"
        />
        <br />
        <input
          type="password"
          value={userPw}
          onChange={changeUserPw}
          placeholder="비밀번호"
          className="input-password"
        />
      </div>
      <div className="btn">
        <button onClick={signIn}>로그인</button>
        &nbsp;
        <button onClick={toMain}>취소</button>
      </div>
    </>
  );
};

export default SignIn;
