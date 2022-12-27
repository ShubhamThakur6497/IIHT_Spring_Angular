package com.book.repo;

import java.time.LocalDate;
import java.util.Date;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.book.entity.Book;


@Repository
public interface IBookRepo  extends JpaRepository<Book, Integer> {
	
	List<Book> findByBookNameOrAuthorOrPublisherOrCreationDate(String bookName,String Author , String publisher , LocalDate creationDate);

}
