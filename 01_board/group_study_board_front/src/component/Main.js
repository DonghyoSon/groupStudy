import { Link } from "react-router-dom";

const Main = (props) => {
  return (
    <>
      <h3>메인페이지</h3>
      <div>
        <Link to="board">게시판</Link>
      </div>
    </>
  );
};

export default Main;
