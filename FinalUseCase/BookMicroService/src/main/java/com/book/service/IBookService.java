package com.book.service;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.book.entity.Book;
import com.book.entity.Subscription;

@Service
public interface IBookService {

	String saveBook(Book book);
	List<Book> getBook(Book book);
	String subscribeBook(Subscription sub);
	List<Book> getUserBooksById(Integer userId);
	List<Book> getUserBooks();
	List<Book> getUserBooksForReaderAndGuest();
	Book updateBookStatus(Integer id);
	String deleteSubscription(Subscription sub);
	Book editBookDetails(Book book,Integer id);
	Book readBook(Integer bookId);
	
}
