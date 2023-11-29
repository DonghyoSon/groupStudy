package study.group.board.model.dao;

import org.apache.ibatis.annotations.Mapper;

import study.group.board.model.vo.Board;

@Mapper
public interface BoardDao {

	//게시글 등록
	int insertBoard(Board board);

}
