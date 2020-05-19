package com.gruk.services;

import com.gruk.entities.User;
import com.gruk.entities.UserViewModel;

import java.util.List;

public interface UserService {
    String XMLfile = "result";
    List<User> getAll();
    User getUserById(long id);
    User save(User user);
    UserViewModel authorization(User user);
    UserViewModel saveChangedUserViewModel(UserViewModel userViewModel);
    UserViewModel deleteUserById(Long idUser);
    UserViewModel marshalling(UserViewModel userViewModel);
}
