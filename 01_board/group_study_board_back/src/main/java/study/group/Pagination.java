package study.group;

import org.springframework.stereotype.Component;

@Component
public class Pagination {
	//reqPage, numPerPage, pageNaviSize, totalPage를 매개변수로 전달받음
	public Page getPage(int reqPage, int numPerPage, int pageNaviSize, int totalCount) {
		int end = reqPage * numPerPage; //페이지 네비의 끝
		int start = end - numPerPage +1; //페이지 네비의 시작
		int totalPage = (int)Math.ceil(totalCount/(double)numPerPage); //총 페이지 수
		int pageNo = ((reqPage -1)/pageNaviSize) * pageNaviSize +1; 
		Page p = new Page(start, end, pageNo, pageNaviSize, totalPage);
		
		return p;
	}
}
