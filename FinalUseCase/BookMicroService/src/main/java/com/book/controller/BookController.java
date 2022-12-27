package com.book.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.book.entity.Book;
import com.book.entity.Subscription;
import com.book.service.IBookService;

@RestController
public class BookController {
	
	@Autowired
	private IBookService bookService;
	
	@CrossOrigin(origins = "http://localhost:4200")
	@PostMapping("/saveBook")
	public String saveBook(@RequestBody Book book) {
		
		String resp=bookService.saveBook(book);
		
		return resp;
	}
	
	@CrossOrigin(origins = "http://localhost:4200")
	@PostMapping("/getBook")
	public List<Book> getBook(@RequestBody Book book) {
		
		//searching book based on multiple inputs
		List<Book> book1=bookService.getBook(book);
		
		return book1;
	}
	
	@CrossOrigin(origins = "http://localhost:4200")
	@GetMapping("/readBook/{bookId}")
	public Book readBook(@PathVariable Integer bookId) {
		
		//searching book based on multiple inputs
		Book book1=bookService.readBook(bookId);
		
		return book1;
	}
	
	@CrossOrigin(origins = "http://localhost:4200") // 
	@PostMapping("/subBook")
	public Integer subBook(@RequestBody Subscription sub) {
		
		bookService.subscribeBook(sub);
		
		return sub.getUserId();
	}
	
	@CrossOrigin(origins = "http://localhost:4200")
	@GetMapping("/getUserBooksById/{userId}")
	public List<Book> getUserBooksById( @PathVariable Integer userId) {
		
		List<Book> book1=bookService.getUserBooksById(userId);
		
		return book1;
	}
	
	@CrossOrigin(origins = "http://localhost:4200")
	@GetMapping("/getUserBooksAdmin")
	public List<Book> getUserBooksForAdmin() {
		
		List<Book> book1=bookService.getUserBooks();
		
		return book1;
	}
	
	@CrossOrigin(origins = "http://localhost:4200")
	@GetMapping("/getUserBooks")
	public List<Book> getUserBooksForReaderAndGuest() {
		
		List<Book> book1=bookService.getUserBooksForReaderAndGuest();
		
		return book1;
	}
	
	@CrossOrigin(origins = "http://localhost:4200")
	@PutMapping("/updateStatus/{id}")
	public Book updateBookStatus(@PathVariable Integer id) {
		
		Book book1=bookService.updateBookStatus(id);
		
		return book1;
	}
	
	
	
	@CrossOrigin(origins = "http://localhost:4200")
	@PostMapping("/delSub")
	public Integer deleteSubscription(@RequestBody Subscription sub) {
		String str="";
		//ResponseEntity<Subscription> resposeEntity= new ResponseEntity<>(HttpStatus.OK);
		try {
			 str=bookService.deleteSubscription(sub);
		}
		catch(Exception e) {
			e.printStackTrace();
			//resposeEntity=new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		
		return sub.getUserId();
		
	}
	
	@CrossOrigin(origins = "http://localhost:4200")
	@PutMapping("editBook/{id}")
	public ResponseEntity<Book> editBookDetails(@PathVariable Integer id,@RequestBody Book book){
		
		return new ResponseEntity<Book>(bookService.editBookDetails(book, id),HttpStatus.OK);
	}

}
