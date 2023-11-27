import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const SignUp = () => {
  const navigate = useNavigate();
  const [userId, setUserId] = useState("");
  const [userPw, setUserPw] = useState("");
  const [userName, serUserName] = useState("");

  const signUp = () => {
    const user = { userId, userPw, userName };

    axios
      .post("/user/signUp", user)
      .then((res) => {
        if (res.data === 1) {
          alert("회원가입 완료");
        } else {
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

  return (
    <>
      <h3>회원가입</h3>
      <div>
        <input
          type="text"
          data={userId}
          setData={setUserId}
          placeholder="아이디"
        />
        <br />
        <input
          type="password"
          data={userPw}
          setData={setUserPw}
          placeholder="비밀번호"
        />
        <br />
        <input
          type="text"
          data={userName}
          setData={serUserName}
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
