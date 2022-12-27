package com.book.entity;

import java.time.LocalDate;
import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Subscription {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer id;
	private Integer bookId;
	private Integer userId;
	private LocalDate subDate;
	
	
	public LocalDate getSubDate() {
		return subDate;
	}
	public void setSubDate(LocalDate subDate) {
		this.subDate = subDate;
	}
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public Integer getBookId() {
		return bookId;
	}
	public void setBookId(Integer bookId) {
		this.bookId = bookId;
	}
	public Integer getUserId() {
		return userId;
	}
	public void setUserId(Integer userId) {
		this.userId = userId;
	}
	public Subscription(Integer id, Integer bookId, Integer userId , LocalDate subDate) {
		super();
		this.id = id;
		this.bookId = bookId;
		this.userId = userId;
		this.subDate=subDate;
	}
	public Subscription() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	

}
