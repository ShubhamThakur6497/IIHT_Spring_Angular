package com.user.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.user.entity.User;
import com.user.service.IUserServices;

@RestController
public class UserController {
	
	@Autowired
	private IUserServices iUserService;
	
	@CrossOrigin(origins = "http://localhost:4200")
	@PostMapping("/signup")
	public String createAccount(@RequestBody User user) {
		String email = iUserService.createAccount(user);
		
		return "Sucess";
	}

	@CrossOrigin(origins = "http://localhost:4200")
	@PostMapping("/signin")
	public User signIn(@RequestBody User user){
		
		return iUserService.signIn(user);
	}
	
//	@PostMapping("/subscribe")
//	public String subscribeBook(@PathVariable Integer bookid ,@PathVariable Integer userId) {
//		String str = iUserService.subBook(bookid ,userId);
//		
//		return str;
//	}
	
	
	
}
