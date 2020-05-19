package com.gruk.controllers;


import com.gruk.entities.User;
import com.gruk.entities.UserViewModel;
import com.gruk.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api")
public class UserController {
    @Autowired
    private UserService userService;

    @RequestMapping(value = "/user" , method = RequestMethod.GET)
    public List<UserViewModel> getAll(){
        List<User> userList =  userService.getAll();
        List<UserViewModel> userViewModels = new ArrayList<>();
        for(User user : userList) {
            userViewModels.add(new UserViewModel(user));
        }
        return userViewModels;
    }

    @RequestMapping(value = "/user",method = RequestMethod.POST)
    public User save(@RequestBody User user){
        System.out.println(user.toString());
        return userService.save(user);
    }

    @RequestMapping(value = "/user/authorization",method = RequestMethod.POST)
    public UserViewModel authorization(@RequestBody User user){
        System.out.println(user.toString() + " controller");
        return userService.authorization(user);
    }

    @RequestMapping(value = "/user/changed",method = RequestMethod.POST)
    public UserViewModel saveChangedUserVIewModel(@RequestBody UserViewModel userViewModel){
        System.out.println("==================================");
        System.out.println(userViewModel.toString());
        return userService.saveChangedUserViewModel(userViewModel);
    }

    @RequestMapping(value = "/user",method = RequestMethod.DELETE)
    public UserViewModel deleteUserById(@RequestParam("id") String id ){
        return userService.deleteUserById(Long.valueOf(id));
    }
}
