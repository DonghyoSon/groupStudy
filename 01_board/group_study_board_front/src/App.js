import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./component/Header";
import Main from "./component/Main";
import SignUp from "./component/SignUp";
import SignIn from "./component/SignIn";

function App() {
  const [loginStatus, setLoginStatus] = useState(false);

  return (
    <div>
      <Header loginStatus={loginStatus} setLoginStatus={setLoginStatus} />
      <div>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/signIn" element={<SignIn />} />
        </Routes>
      </div>
    </div>
  );
}
export default App;
