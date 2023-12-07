package study.group.board.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import study.group.board.model.service.BoardService;
import study.group.board.model.vo.Board;

@RestController
@RequestMapping(value="/board")
public class BoardController {
	@Autowired
	private BoardService boardService;
	
	//게시글 등록
	@PostMapping(value="/insertBoard")
	public int insertBoard(@RequestBody Board board) //@GetMapping으로 @RequestBody은 되지 않는듯 함 
	{
		System.out.println(board);
		int result = boardService.insertBoard(board);
		return result;
	}
	
	//게시글 목록 출력
	@GetMapping(value="/boardList")
	public List boardList() {
		List boardList = boardService.boardList();
		return boardList;
	}
	
	//게시글 상세 보기
	@GetMapping(value="/boardView/{boardNo}")
	public Board boardView(@PathVariable int boardNo) {
		Board board = boardService.boardView(boardNo);
		return board;
	}
	
	//게시글 삭제
	@GetMapping(value="/boardDelete/{boardNo}")
	public int boardDelete(@PathVariable int boardNo) {
		int result = boardService.boardDelete(boardNo);
		return result;
	}
	
	//게시글 수정
	@PostMapping(value="/modifyBoard")
	public int boardModify(@RequestBody Board modifiedBoard) {
		int result = boardService.boardModify(modifiedBoard);
		return result;
	}
	
}
