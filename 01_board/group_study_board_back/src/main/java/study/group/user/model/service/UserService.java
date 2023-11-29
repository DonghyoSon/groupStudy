package study.group.user.model.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import study.group.user.model.dao.UserDao;
import study.group.user.model.vo.User;

@Service
public class UserService {
	@Autowired
	private UserDao userDao;

	//회원가입
	public int insertUser(User user) {
		return userDao.insertUser(user);
	}

	//로그인 
	public User signIn(User user) {
		User selectedUser = userDao.signIn(user);
		return selectedUser;
	}

	//회원정보 수정
	public int modifyUser(User user) {		
		return userDao.modifyUser(user);
	}
}
