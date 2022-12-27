package com.book.entity;

import java.time.LocalDate;
import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Book {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer id;
	private String bookName;
	private String publisher;
	private Integer price;
	private String category;
	private Boolean status;
	private String content;
	private LocalDate creationDate;
	private String author;
	
	public String getAuthor() {
		return author;
	}
	public void setAuthor(String author) {
		this.author = author;
	}
	public LocalDate getCreationDate() {
		return creationDate;
	}
	public void setCreationDate(LocalDate creationDate) {
		this.creationDate = creationDate;
	}
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getBookName() {
		return bookName;
	}
	public void setBookName(String bookName) {
		this.bookName = bookName;
	}
	public String getPublisher() {
		return publisher;
	}
	public void setPublisher(String publisher) {
		this.publisher = publisher;
	}
	public Integer getPrice() {
		return price;
	}
	public void setPrice(Integer price) {
		this.price = price;
	}
	public String getCategory() {
		return category;
	}
	public void setCategory(String category) {
		this.category = category;
	}
	public Boolean getStatus() {
		return status;
	}
	public void setStatus(Boolean status) {
		this.status = status;
	}
	public String getContent() {
		return content;
	}
	public void setContent(String content) {
		this.content = content;
	}
	public Book(Integer id, String bookName, String publisher, Integer price, String category, Boolean status,
			String content , LocalDate creationDate ,String author ) {
		super();
		this.id = id;
		this.bookName = bookName;
		this.publisher = publisher;
		this.price = price;
		this.category = category;
		this.status = status;
		this.content = content;
		this.creationDate = creationDate;
		this.author = author;
	}
	public Book() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	
	


}
