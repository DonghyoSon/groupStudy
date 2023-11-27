package user.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import user.model.service.UserService;
import user.model.vo.User;

@RestController
@RequestMapping(value="/user")
public class UserController {
	@Autowired
	private UserService userService;
	
	//회원가입
	@PostMapping(value="/signUp")
	public int signUp(@RequestBody User u) {
		System.out.println("프론트로부터 넘어온 회원가입 정보: " + u);
		return 0;
	}
}
