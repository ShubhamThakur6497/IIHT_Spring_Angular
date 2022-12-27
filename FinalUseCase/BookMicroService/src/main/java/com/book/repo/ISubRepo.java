package com.book.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.book.entity.Book;
import com.book.entity.Subscription;

@Repository
public interface ISubRepo  extends JpaRepository<Subscription, Integer>{
	
	List<Subscription> findByUserId(Integer userId);
	Subscription findByUserIdAndBookId(Integer userId ,Integer bookId); 

}
