package com.emp.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.emp.Entity.Employee;
import com.emp.Repo.IEmployeeRepo;

@Service
public class EmployeeServiceImpl implements IEmployeeService  {

	@Autowired
	private IEmployeeRepo employeeRepo;
	
	@Override
	public Integer saveEmployee(Employee employee) {
		Employee savedEmployee = employeeRepo.save(employee);
		return savedEmployee.getId();
	}

	@Override
	public List<Employee> getAllEmployees() {
		// TODO Auto-generated method stub
		return employeeRepo.findAll();
	}

	@Override
	public Optional<Employee> getEmployee(Integer id) {
		Optional<Employee> employee = employeeRepo.findById(id);
		return employee;
	}

	@Override
	public void deleteEmployee(Integer id) {
		employeeRepo.deleteById(id);
		
	}


}
