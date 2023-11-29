package study.group.user.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import study.group.user.model.service.UserService;
import study.group.user.model.vo.User;

@RestController
@RequestMapping(value="/user")
public class UserController {
	@Autowired
	private UserService userService;
	
	//회원가입
	@PostMapping(value="/signUp")
	public int insertUser(@RequestBody User user) {
		System.out.println(user);
		int result = userService.insertUser(user);
		return result;
	}
	
	//로그인
	@PostMapping(value="signIn")
	public User signIn(@RequestBody User user) {
		System.out.println(user);
		User selectedUser = userService.signIn(user);
		return selectedUser;
	}
	
	//회원정보 수정
	@PostMapping(value="modifyUser")
	public int modifyUser(@RequestBody User user) {
		System.out.println(user);
		int result = userService.modifyUser(user);
		return result;
	}
}
