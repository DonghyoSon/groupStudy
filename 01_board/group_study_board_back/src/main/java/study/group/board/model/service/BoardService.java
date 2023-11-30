package study.group.board.model.service;

import java.util.List;

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

	//게시글 목록 출력
	public List boardList() {
		List boardList = boardDao.boardList();
		return boardList;
	}
}
