package com.hr.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.hr.entity.HR;

@Service
public class HRServiceImpl implements IhrService {

	//fake HR list
	
	List<HR> list=List.of(
			new HR(1001L,"Vivek","123456789"),
			new HR(1002L,"Shubham","22222"),
			new HR(1003L,"Kohli","33333"),
			new HR(1004L,"Rohit","4444"),
			new HR(1005L,"Pandya","5555"),
			new HR(1006L,"Dhoni","66666")
			);
	
	
	
	@Override
	public HR getHR(Long id) {
		// TODO Auto-generated method stub
		return list.stream().filter(hr -> hr.getUserID().equals(id)).findAny().orElse(null);
	}
	
	

}
