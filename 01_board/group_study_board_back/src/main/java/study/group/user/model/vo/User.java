package study.group.user.model.vo;

import org.apache.ibatis.type.Alias;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Alias(value="user")
public class User {
	private int userNo;
	private String userId;
	private String userPw;
	private String userName;
}
