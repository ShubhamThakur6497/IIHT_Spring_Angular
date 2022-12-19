package com.resource.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.resource.entity.Resource;

@Service
public class ResourceServiceImpl implements IResourceService {
	
	List<Resource> list= List.of(
			new Resource(1L,"peter@gmail.com","peter","React_Dev",1001L),
			new Resource(2L,"Quin@gmail.com","quin","Java_Dev",1002L),
			new Resource(3L,"harley@gmail.com","harley","Python_Dev",1003L),
			new Resource(4L,"banner@gmail.com","banner","Node_Dev",1003L),
			new Resource(5L,"sasuke@gmail.com","sasuke","Node_Dev",1004L),
			new Resource(6L,"naruto@gmail.com","naruto","React_Dev",1005L),
			new Resource(7L,"lee@gmail.com","lee","Angular_Dev",1005L),
			new Resource(8L,"jiraya@gmail.com","jiraya","Aws_Dev",1006L),
			new Resource(9L,"sakuna@gmail.com","sakuna","AWS_Dev",1006L),
			new Resource(10L,"hinata@gmail.com","hinata","Java_Dev",1002L)
			
			);

	@Override
	public List<Resource> getResourceForUsers(Long userId) {
		
		return list.stream().filter(resource -> resource.getUserID().equals(userId)).collect(Collectors.toList());
	}

}
