package study.group.board.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
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
//		int result = boardService.insertBoard(board);
		return 0;
	}
	
}
