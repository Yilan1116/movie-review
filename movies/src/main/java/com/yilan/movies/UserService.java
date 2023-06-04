package com.yilan.movies;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

@Service
@Repository

public interface UserService {
    String loginService(String username,String password);
    String registerService(User user);
}
