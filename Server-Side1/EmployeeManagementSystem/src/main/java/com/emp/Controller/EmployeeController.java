package com.emp.Controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.emp.Entity.Employee;
import com.emp.Service.EmployeeServiceImpl;
import com.emp.Service.IEmployeeService;

@RestController
public class EmployeeController {
	
	@Autowired
	private IEmployeeService employeeService;
	
	@PostMapping("/add")
	Integer createEmployee(@RequestBody Employee employee) {
		Integer id = employeeService.saveEmployee(employee);
		System.out.println(id);
		return id;
	}
	
	@GetMapping("/getall")
	public List<Employee> getEmployees(){
		return employeeService.getAllEmployees();
	}
	
	@GetMapping("/get/{id}")
	public Optional<Employee> getEmployee(Integer id){
		Optional<Employee> employee=employeeService.getEmployee(id);
		return employee;
	}
	
	@DeleteMapping("del/{id}")
	public ResponseEntity<Employee> deleteEmployee(@PathVariable Integer id) {
		
		ResponseEntity<Employee> resposeEntity= new ResponseEntity<>(HttpStatus.OK);
		try {
			employeeService.deleteEmployee(id);
		}
		catch(Exception e) {
			e.printStackTrace();
			resposeEntity=new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		
		return resposeEntity;
		
	}
	
	@PutMapping("update/{id}")
	public ResponseEntity<Employee> updateEmployee(@PathVariable Integer id,@RequestBody Employee employee){
		
		return new ResponseEntity<Employee>(employeeService.updateEmployee(employee, id),HttpStatus.OK);
	}

}
