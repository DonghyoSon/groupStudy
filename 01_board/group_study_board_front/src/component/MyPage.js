import { useNavigate } from "react-router-dom";
import axios from "axios";

const MyPage = (props) => {
  const navigate = useNavigate();
  const user = props.user;

  //메인으로 돌아가는 함수
  const toMain = () => {
    return navigate("/");
  };

  //내 정보 변경
  const changeUserPw = (e) => {
    const inputPw = e.currentTarget.value;
    user.userPw = inputPw;
  };

  //변경된 사항을 수정하는 함수
  const modifyUser = () => {
    console.log("수정 예정인 정보:", user);
    axios
      .post("/user/modifyUser", user)
      .then((res) => {
        console.log(res.data);
        if (res.data === 1) {
          alert("내 정보 수정 완료");
          navigate("/");
        } else {
          alert("내 정보 수정 실패");
        }
      })
      .catch((res) => {
        console.log(res.data);
        alert("내 정보 수정 실패");
      });
  };

  return (
    <>
      <h3>마이페이지</h3>
      <div>
        아이디: <input type="text" value={user.userId} disabled />
        <br />
        비밀번호:
        <input type="password" onChange={changeUserPw} value={user.userPw} />
        <br />
        이름: <input type="text" value={user.userName} disabled />
      </div>
      <div>
        <button onClick={modifyUser}>내 정보 수정</button>
        &nbsp;
        <button onClick={toMain}>메인으로</button>
      </div>
    </>
  );
};

export default MyPage;
