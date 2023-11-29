package study.group.user.model.dao;

import org.apache.ibatis.annotations.Mapper;

import study.group.user.model.vo.User;

@Mapper
public interface UserDao {

	//회원가입
	int insertUser(User user);

	//로그인
	User signIn(User user);

	//회원정보 수정
	int modifyUser(User user);

}
