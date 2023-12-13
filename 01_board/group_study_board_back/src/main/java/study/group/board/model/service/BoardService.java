package study.group.board.model.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import study.group.Page;
import study.group.Pagination;
import study.group.board.model.dao.BoardDao;
import study.group.board.model.vo.Board;

@Service
public class BoardService {
	@Autowired
	private BoardDao boardDao;
	@Autowired
	private Pagination pagination;

	//게시글 등록
	public int insertBoard(Board board) {
		return boardDao.insertBoard(board);
	}

	//게시글 목록 출력(페이지 기능 미포함)
	/*public List boardList() {
		List boardList = boardDao.boardList();
		return boardList;
	}*/
	//게시글 목록 출력(페이지 기능 포함)
	public Map boardList(int reqPage) {
		//게시물 목록 조회, 페이징에 필요한 데이터를 취합
		int numPerPage = 10; //한 페이지당 표시될 게시물의 수
		int pageNaviSize = 5; //페이지 네비게이션에 표시되는 페이지 수
		int totalCount = boardDao.totalCount();//전체 게시물 수
		
		//페이징 조회 및 페이지 네비게이션 제작에 필요한 데이터를 객체로 받아옴
		Page p = pagination.getPage(reqPage, numPerPage, pageNaviSize, totalCount);
		
		//게시물 목록 조회
		List boardList = boardDao.boardList(p); //p에 들어있는 start, end값을 MyBatis로 전달
		
		//p, boardList 두 값을 HashMap을 이용하여 같이 반환
		HashMap<String, Object> map = new HashMap<String, Object>();
		map.put("boardList", boardList);
		map.put("p", p);
		
		return map;
	}

	//게시글 상세 보기
	public Board boardView(int boardNo) {
		return boardDao.boardView(boardNo);
	}

	//게시글 삭제
	public int boardDelete(int boardNo) {
		return boardDao.boardDelete(boardNo);
	}

	//게시글 수정
	public int boardModify(Board modifiedBoard) {
		return boardDao.boardModify(modifiedBoard);
	}
}
