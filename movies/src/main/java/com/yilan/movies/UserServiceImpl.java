package com.yilan.movies;

import org.springframework.stereotype.Service;

import javax.annotation.Resource;

@Service
public class UserServiceImpl implements UserService {
    @Resource
    private UserMapper userMapper;
    @Override
    public String loginService(String username, String password){
        User user = userMapper.findByUsername(username);
        if(user ==null){
            return "The user does not exist";
        }else{
            if(password.equals(user.getPassword())){
                return "Success";
            }else{
                return "The password is wrong";
            }
        }
    }
    @Override
    public String registerService(User user){
        String tempUnm = user.getUsername();
        User tempUser = userMapper.findByUsername(tempUnm);
        if(tempUser!=null){
            return "The username has existed";
        }else{
            userMapper.save(user);
            return "success";
        }
    }
}
