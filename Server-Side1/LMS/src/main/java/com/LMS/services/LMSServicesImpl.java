package com.LMS.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.LMS.Entity.Book;
import com.LMS.Exception.ResourceNotFoundExceptionHandler;
import com.LMS.repo.ILMSRepo;


import java.util.List;
import java.util.Optional;

@Service
public class LMSServicesImpl implements ILMSServices{
	
	@Autowired
	private ILMSRepo repo;

	@Override
	public Book saveBook(Book book) {
		
		Book book1=repo.save(book);
		
		return book1;
	}

	
	@Override
	public Optional<Book> searchBookById(Integer id) {
		
		Optional<Book> book=repo.findById(id);
		
		return book;
	}


	@Override
	public List<Book> getBooks() {
		
		return repo.findAll();
	}


	@Override
	public Book updateBook(Book book, Integer id) {
		
		//checking if Book exists or not
		Book bookUpdate=repo.findById(id).orElseThrow(
					()->new ResourceNotFoundExceptionHandler("Book" ,"id", id));
				
		bookUpdate.setBookName(book.getBookName());
		bookUpdate.setGenre(book.getGenre());
		bookUpdate.setPrice(book.getPrice());
		bookUpdate.setStatus(book.getStatus());
		bookUpdate.setAuthor(book.getAuthor());
				
		repo.save(bookUpdate);
				
		return bookUpdate;
		
	}
	
	@Override
	public Book updateBookStatus(Book book, Integer id) {
		
		//checking if Book exists or not
		Book bookUpdateStatus=repo.findById(id).orElseThrow(
					()->new ResourceNotFoundExceptionHandler("Book" ,"id", id));
				
		
		bookUpdateStatus.setStatus(book.getStatus());
		repo.save(bookUpdateStatus);
				
		return bookUpdateStatus;
		
	}


	@Override
	public void deleteBook(Integer id) {
		
		repo.deleteById(id);
		
	}

}
