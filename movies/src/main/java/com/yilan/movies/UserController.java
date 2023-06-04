package com.yilan.movies;




import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;


@SuppressWarnings({"all"})
@RestController

public class UserController {
    @Autowired
    UserServiceImpl userServiceImpl;

    @RequestMapping("/login")
    public Result login(@RequestParam String username, @RequestParam String password) {
        String msg = userServiceImpl.loginService(username,password);
        if(("SUCCESS").equals(msg)){
            return ResultUtil.success("登录成功");
        }else{
            return ResultUtil.error(msg);
        }
    }

    @RequestMapping("/register")
    public Result login( User user) {
        String msg = userServiceImpl.registerService(user);
        if(("SUCCESS").equals(msg)){
            return ResultUtil.success("注册成功");
        }else{
            return ResultUtil.error(msg);
        }
    }

}