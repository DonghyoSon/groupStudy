package study.group.board.model.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import study.group.board.model.dao.BoardDao;
import study.group.board.model.vo.Board;

@Service
public class BoardService {
	@Autowired
	private BoardDao boardDao;

	//게시글 등록
	public int insertBoard(Board board) {
		return boardDao.insertBoard(board);
	}
}
