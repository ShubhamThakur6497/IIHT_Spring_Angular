package com.book.service;

import java.time.LocalDate;
import java.time.Period;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.book.entity.Book;
import com.book.entity.Subscription;
import com.book.repo.IBookRepo;
import com.book.repo.ISubRepo;

@Service
public class BookServiceImpl implements IBookService {

	@Autowired
	private IBookRepo repo;
	
	@Autowired
	private ISubRepo subRepo;
	
	@Override
	public String saveBook(Book book) {
		
		String msg="";
		
		book.setCreationDate(LocalDate.now());
		book.setStatus(true);
		
		Book resp =repo.save(book);
		
		if(resp.getBookName() != null && resp.getBookName() !="")
			msg=resp.getBookName() + " - Saved in the system";
		else
			msg="There seems to be some issue - book wasn't added in the system";
		
		return msg;
	}

	@Override
	public List<Book> getBook(Book book) {
		
//		List<Book> bookList = repo.findAll();
//		Book book1 = new Book();
//		
//		for(Book temp:bookList) {
//			
//			if(book.getBookName() != null && book.getBookName() != "" && book.getBookName().equals(temp.getBookName())) {
//				book1=temp;
//			}
//			
//			
//			
//		}
		//logic needs to be checked
		List<Book> book1= repo.findByBookNameOrAuthorOrPublisherOrCreationDate
				(book.getBookName(), book.getAuthor(), book.getPublisher(), book.getCreationDate());
		
		return book1;
	}

	@Override
	public String subscribeBook(Subscription sub) {
	
		Subscription s=subRepo.findByUserIdAndBookId(sub.getUserId(), sub.getBookId());
		
		if(s == null ) {
		
	
			sub.setSubDate(LocalDate.now());
			
			subRepo.save(sub);
			
			return "Subscribed Book Id : " + sub.getBookId();
		}
		else {
			return "Book is already subscribed by the User: " + sub.getBookId();
		}
	}

	@Override
	public List<Book> getUserBooksById(Integer userId) {
		
		List<Book> tempBookList =new ArrayList<Book>();
		
		List<Subscription> subBookDetails=subRepo.findByUserId(userId);
		
		for(Subscription temp:subBookDetails) {
			
			Optional<Book> book =repo.findById(temp.getBookId());
			
			Book t1=book.get();
			tempBookList.add(t1);
			
		}
		
		
		return tempBookList;
	}
	
	@Override
	public List<Book> getUserBooks() {
		
		List<Book> tempBookList =repo.findAll();
		
		return tempBookList;
	}
	
	@Override
	public List<Book> getUserBooksForReaderAndGuest() {
		
		List<Book> tempBookList =repo.findAll();
		List<Book> finalList=new ArrayList<Book>();
		
		//removing content and blocked books
		
		for(Book temp:tempBookList) {
			
			if(temp.getStatus()) {
				temp.setContent("");
				
				finalList.add(temp);
			}
			
		}
		
		return finalList;
	}

	@Override
	public String deleteSubscription(Subscription sub) {
		
		//Subscription sub=subRepo.findByUserIdAndBookId(userId, bookId);
		
		System.out.println(sub);
		
		
		
		Subscription sub1=subRepo.findByUserIdAndBookId(sub.getUserId(), sub.getBookId());
		
		LocalDate subDate=sub1.getSubDate();
		LocalDate today=LocalDate.now();
		
		Period period=Period.between(subDate, today);
		
		if(period.getDays() > 1) {
			return "Not deleted";
		}
		else {
			subRepo.delete(sub1);
			return "Data deleted";
		}
	}

	@Override
	public Book editBookDetails(Book book, Integer id) {
		
		
		
				//checking if Book exists or not
				Optional<Book> bookUpdate=repo.findById(id);
				
				if(bookUpdate != null) {
					Book bookToBeUpdated = bookUpdate.get();
					
					bookToBeUpdated.setAuthor(book.getAuthor());
					bookToBeUpdated.setBookName(book.getBookName());
					bookToBeUpdated.setCategory(book.getCategory());
					bookToBeUpdated.setContent(book.getContent());
					bookToBeUpdated.setPrice(book.getPrice());
					bookToBeUpdated.setPublisher(book.getPublisher());
					bookToBeUpdated.setStatus(book.getStatus());
					
					repo.save(bookToBeUpdated);
					
					return bookToBeUpdated;
				}
						
				
		
		return null;
	}

	@Override
	public Book updateBookStatus(Integer id) {
		
		Optional<Book> book1=repo.findById(id);
		
		Book finalBook=new Book();
		
		if(book1 != null) {
			
			finalBook =book1.get();
			
			if(finalBook.getStatus()) {
				finalBook.setStatus(false);
			}
			else {
				finalBook.setStatus(true);
			}
		
			
		}
		
		repo.save(finalBook);
		return finalBook;
	}

	@Override
	public Book readBook(Integer bookId) {
		
		Optional<Book> book =repo.findById(bookId);
		
		Book t1=book.get();
		
		return t1;
	}

	
	

	
	
}
