package com.user.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class User {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer userId;
	private String username;
	private String password;
	private String accessLevel;
	private String status;
	private String email;
//	private String subList;
//	
//	
//	public String getSubList() {
//		return subList;
//	}
//	public void setSubList(String subList) {
//		this.subList = subList;
//	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	
	
	public Integer getUserId() {
		return userId;
	}
	public void setUserId(Integer userId) {
		this.userId = userId;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getAccessLevel() {
		return accessLevel;
	}
	public void setAccessLevel(String accessLevel) {
		this.accessLevel = accessLevel;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public User(Integer userId, String username, String password, String accessLevel, String status, String email ) {
		super();
		this.userId = userId;
		this.username = username;
		this.password = password;
		this.accessLevel = accessLevel;
		this.status = status;
		this.email = email;
//		this.subList = subList;
	}
	public User() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	
	
	
	
	

}
