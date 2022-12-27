package com.user.service;

import java.util.Optional;

import org.springframework.stereotype.Service;

import com.user.entity.User;

@Service
public interface IUserServices {
	
	String createAccount(User user);
	User signIn(User user);
//	String subBook(Integer bookId,Integer userId);

}
