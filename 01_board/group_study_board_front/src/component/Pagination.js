const Pagination = (props) => {
  const reqPage = props.reqPage;
  const setReqPage = props.setReqPage;
  const page = props.page;

  //페이징 JSX가 저장될 배열
  const arr = new Array();

  //페이지 버튼
  const changePageFunc = (e) => {
    const changePage = e.currentTarget.innerText;
    console.log("reqPage", changePage);
    setReqPage(changePage);
  };

  //현재 페이지를 굵게 표시하는 함수 - React에서 HTML에 인라인 방식으로 style을 지정하는 방법
  const fontBold = {
    fontWeight: "bold",
  };

  //페이지 숫자 버튼
  let pageNo = page.pageNo;
  for (let i = 0; i < page.pageNaviSize; i++) {
    //현재 페이지를 구분하기 위해 <h5>태그 삽입
    if (pageNo === Number(reqPage)) {
      arr.push(
        <span onClick={changePageFunc} style={fontBold}>
          {pageNo}
        </span>
      );
    } else {
      arr.push(<span onClick={changePageFunc}>{pageNo}</span>);
    }

    pageNo++;

    if (pageNo > page.totalPage) {
      break;
    }
  }

  return <div>{arr}</div>;
};

export default Pagination;
