package com.user.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.user.entity.User;
import com.user.repo.IUserRepo;

@Service
public class UserServiceImpl implements IUserServices {

	@Autowired
	private IUserRepo repo;

	@Override
	public String createAccount(User user) {
		
		user.setStatus("Active");
		
		User user1=repo.save(user);
		
		return user1.getEmail();
	}

	@Override
	public User signIn(User user) {
		
		User user1=repo.findByEmailAndPassword(user.getEmail(), user.getPassword());
		
		if(user1 !=  null) {
			user1.setPassword("");
			
			return user1;
		}
		else {
			return null;
		}
		
		
	}

//	@Override
//	public String subBook(Integer bookId, Integer userId) {
//		
//		Optional<User> user = repo.findById(userId);
//		
//		User u=user.get();	
//		
//		String str=u.getSubList();
//		str = str + ";" +bookId;
//		
//		return "subscriber book Id :" + bookId;
//	}

}
