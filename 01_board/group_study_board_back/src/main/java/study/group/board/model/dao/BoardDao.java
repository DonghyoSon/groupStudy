package study.group.board.model.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import study.group.Page;
import study.group.board.model.vo.Board;

@Mapper
public interface BoardDao {

	//게시글 등록
	int insertBoard(Board board);

	//게시글 목록 출력(페이지 기능 미포함)
//	List boardList();
	//게시글 목록 출력(페이지 기능 포함)
	int totalCount(); //전체 게시물 수
	List boardList(Page p); //p에 페이지 네비게이션 제작에 필요한 start, end값을 가지고 있음

	//게시글 상세 보기
	Board boardView(int boardNo);

	//게시글 삭제
	int boardDelete(int boardNo);

	//게스글 수정
	int boardModify(Board modifiedBoard);

	

}
