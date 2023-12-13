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

  //페이지 숫자 버튼
  let pageNo = page.pageNo;
  for (let i = 0; i < page.pageNaviSize; i++) {
    arr.push(<span onClick={changePageFunc}>{pageNo}</span>);

    pageNo++;

    if (pageNo > page.totalPage) {
      break;
    }
  }

  return <div>{arr}</div>;
};

export default Pagination;
