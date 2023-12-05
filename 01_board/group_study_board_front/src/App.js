import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./component/Main";
import SignUp from "./component/SignUp";
import SignIn from "./component/SignIn";
import Header from "./component/header";
import MyPage from "./component/MyPage";
import Board from "./component/BoardList";
import BoardList from "./component/BoardList";
import BoardFrm from "./component/BoardFrm";
import BoardView from "./component/BoardView";
import BoardModify from "./component/BoardModify";
import BoardWrite from "./component/BoardWrite";

function App() {
  const [loginStatus, setLoginStatus] = useState(false); //로그인된 상태를 파악하기 위해 필요
  const [user, setUser] = useState({}); //마이페이지, 게시판에서 로그인된 유저 정보를 사용하기 위해 필요

  return (
    <div>
      <Header loginStatus={loginStatus} setLoginStatus={setLoginStatus} />
      <div>
        <Routes>
          <Route
            path="/"
            element={<Main user={user} loginStatus={loginStatus} />}
          />
          <Route path="/signUp" element={<SignUp />} />
          <Route
            path="/signIn"
            element={
              <SignIn setLoginStatus={setLoginStatus} setUser={setUser} />
            }
          />
          <Route path="/myPage" element={<MyPage user={user} />} />
          <Route
            path="/boardList"
            element={<BoardList user={user} loginStatus={loginStatus} />}
          />
          <Route path="/boardWrite" element={<BoardWrite user={user} />} />
          <Route path="/boardFrm" element={<BoardFrm />} />
          <Route
            path="/boardView"
            element={<BoardView user={user} loginStatus={loginStatus} />}
          />
          <Route path="/boardModify" element={<BoardModify />} />
        </Routes>
      </div>
    </div>
  );
}
export default App;
