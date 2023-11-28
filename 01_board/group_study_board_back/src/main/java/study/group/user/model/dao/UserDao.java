package study.group.user.model.dao;

import org.apache.ibatis.annotations.Mapper;

import study.group.user.model.vo.User;

@Mapper
public interface UserDao {

	//회원가입
	int insertUser(User user);

}
