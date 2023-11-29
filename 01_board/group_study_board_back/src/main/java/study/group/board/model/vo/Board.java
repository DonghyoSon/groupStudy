package study.group.board.model.vo;

import org.apache.ibatis.type.Alias;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Alias(value="board")
public class Board {
	private int boardNo;
	private String boardTitle;
	private String boardContent;
	private int userNo;
	private String boardRegDate;
}
