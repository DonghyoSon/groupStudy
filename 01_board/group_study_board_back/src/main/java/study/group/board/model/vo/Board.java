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
	private String userName; //board_tbl과 user_tbl의 join으로 출력되는 컬럼 user_name에 대한 변수
	private String boardRegDate;
}
