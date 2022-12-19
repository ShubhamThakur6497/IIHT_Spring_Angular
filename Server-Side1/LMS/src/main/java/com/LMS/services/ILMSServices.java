package com.LMS.services;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.LMS.Entity.Book;



@Service
public interface ILMSServices {
	
	Book saveBook(Book book);
	Optional<Book> searchBookById(Integer id);
	List<Book> getBooks();
	Book updateBook(Book book , Integer id);
	public void deleteBook(Integer id);
	Book updateBookStatus(Book book , Integer id);


}
