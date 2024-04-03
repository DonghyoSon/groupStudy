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

  //현재 페이지를 굵게 표시하는 변수 - React에서 HTML에 인라인 방식으로 style을 지정하는 방법
  // const fontBold = {
  //   fontWeight: "bold",
  // };

  //제일 처음으로 보내는 버튼: arr.push()형식이므로, << < 1234 > >> 순서대로 진행한다.
  arr.push(
    <span
      onClick={() => {
        setReqPage(1); //reqPage를 1로 설정
      }}
      className="material-symbols-outlined"
    >
      first_page
    </span>
  );

  //이전 버튼
  arr.push(
    <span
      onClick={() => {
        //현재 페이지가 1이 아닐 때,
        if (reqPage !== 1) {
          setReqPage(Number(reqPage) - 1); //현재 페이지에서 -1
        }
      }}
      className="material-symbols-outlined"
    >
      keyboard_arrow_left
    </span>
  );

  //페이지 숫자 버튼
  let pageNo = page.pageNo;
  for (let i = 0; i < page.pageNaviSize; i++) {
    //현재 페이지를 구분하기 위해 인라인 style 사용 <span style={fontBold} />
    if (pageNo === Number(reqPage)) {
      arr.push(
        <span onClick={changePageFunc} className="active-pageNo">
          {pageNo}
        </span>
      );
    } else {
      arr.push(
        <span onClick={changePageFunc} className="nonActive-pageNo">
          {pageNo}
        </span>
      );
    }

    pageNo++; //페이지 네비게이션에서 숫자를 표현(1,2,3,4...)

    if (pageNo > page.totalPage) {
      break;
    }
  }

  //다음 버튼
  arr.push(
    <span
      onClick={() => {
        //맨 마지막(총 페이지)가 아닐 때,
        if (reqPage !== page.totalPage) {
          setReqPage(Number(reqPage) + 1); //현재 페이지에서 +1
        }
      }}
      className="material-symbols-outlined"
    >
      keyboard_arrow_right
    </span>
  );

  //제일 끝으로 보내는 버튼
  arr.push(
    <span
      onClick={() => {
        setReqPage(page.totalPage); //reqPage를 맨 마지막(총 페이지)로 설정
      }}
      className="material-symbols-outlined"
    >
      last_page
    </span>
  );

  return <div className="inside-pagenation">{arr}</div>;
};

export default Pagination;
