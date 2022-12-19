package com.LMS.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.LMS.Entity.Book;

@Repository
public interface ILMSRepo extends JpaRepository<Book, Integer> {

}
