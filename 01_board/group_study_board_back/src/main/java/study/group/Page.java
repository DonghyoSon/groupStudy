package study.group;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
//Page클래스는 MyBatis에서 사용되지 않으므로, @Alias 미설정
public class Page {
	private int start; 
	private int end;
	private int pageNo; //페이지 시작 번호
	private int pageNaviSize; //페이지 네비게이션에 표시되는 페이지 수
	private int totalPage; //총 페이지 수
}
