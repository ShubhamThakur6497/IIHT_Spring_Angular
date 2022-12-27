package com.user.repo;

import java.time.LocalDate;

import org.springframework.data.jpa.repository.JpaRepository;


import com.user.entity.User;

public interface IUserRepo extends JpaRepository<User, Integer> {
	
	User findByEmailAndPassword(String email,String password );


}
