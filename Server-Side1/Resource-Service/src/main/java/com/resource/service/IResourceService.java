package com.resource.service;

import java.util.List;

import org.springframework.stereotype.Service;
import com.resource.entity.*;

@Service
public interface IResourceService {

	public List<Resource> getResourceForUsers(Long userId);
	
}
