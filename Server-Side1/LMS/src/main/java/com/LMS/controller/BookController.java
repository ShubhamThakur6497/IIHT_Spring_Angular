package com.LMS.controller;

import java.util.List;
import java.util.Optional;

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

import com.LMS.Entity.Book;
import com.LMS.services.ILMSServices;






@RestController
public class BookController {
	
	@Autowired
	private ILMSServices ilmService;
	
	@CrossOrigin(origins = "http://localhost:4200")
	@PostMapping("/add")
	public Book createBook(@RequestBody Book book) {
		Book bookName = ilmService.saveBook(book);
		
		return bookName;
	}
	
	@GetMapping("/search/{id}")
	public Optional<Book> searchBookById(@PathVariable Integer id) {
		
		Optional<Book> book=ilmService.searchBookById(id);
		
		return book;
	}
	
	@CrossOrigin(origins = "http://localhost:4200")
	@GetMapping("/getall")
	public List<Book> getBooks(){
		return ilmService.getBooks();
	}
	
	@PutMapping("update/{id}")
	public ResponseEntity<Book> updateBook(@PathVariable Integer id,@RequestBody Book book){
		
		return new ResponseEntity<Book>(ilmService.updateBook(book, id),HttpStatus.OK);
	}
	
	@PutMapping("updateStatus/{id}")
	public ResponseEntity<Book> updateBookStatus(@PathVariable Integer id,@RequestBody Book book){
		
		return new ResponseEntity<Book>(ilmService.updateBookStatus(book, id),HttpStatus.OK);
	}
	
	@CrossOrigin(origins = "http://localhost:4200")
	@DeleteMapping("del/{id}")
	public ResponseEntity<Book> deleteEmployee(@PathVariable Integer id) {
		
		ResponseEntity<Book> resposeEntity= new ResponseEntity<>(HttpStatus.OK);
		try {
			ilmService.deleteBook(id);
		}
		catch(Exception e) {
			e.printStackTrace();
			resposeEntity=new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		
		return resposeEntity;
		
	}

}
