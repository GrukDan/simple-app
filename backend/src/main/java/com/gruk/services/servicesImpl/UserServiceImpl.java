package com.gruk.services.servicesImpl;

import com.gruk.entities.User;
import com.gruk.entities.UserViewModel;
import com.gruk.repositories.UserRepository;
import com.gruk.services.UserService;
import com.thoughtworks.xstream.XStream;
import com.thoughtworks.xstream.io.xml.DomDriver;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.BufferedWriter;
import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.util.List;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public List<User> getAll() {
        return (List<User>) userRepository.findAll();
    }

    @Override
    public User getUserById(long id) {
        return userRepository.findByIduser(id);
    }

    @Override
    public User save(User user) {
        if(userRepository.findByLoginAndPassword(user.getLogin(),user.getPassword())==null){
            userRepository.save(user);
            marshalling(new UserViewModel(userRepository.findByLoginAndPassword(user.getLogin(),user.getPassword())));
            return user;
        }else
        return null;
    }

    @Override
    public UserViewModel authorization(User user) {
        User user1 = userRepository.findByLoginAndPassword(user.getLogin(),user.getPassword());
        if(user1!=null) {
            return new UserViewModel(user1);
        }
        else{
            return null;
        }
    }

    @Override
    public UserViewModel saveChangedUserViewModel(UserViewModel userViewModel) {
        User user = userRepository.findByIduser(userViewModel.getIduser());
        user.setUserName(userViewModel.getUserName());
        user.setUserSurname(userViewModel.getUserSurname());
        user.setEmail(userViewModel.getEmail());
        UserViewModel userViewModel1 = new UserViewModel(userRepository.save(user));
        return userViewModel1;
    }

    @Override
    public UserViewModel deleteUserById(Long idUser) {
        User user = userRepository.findByIduser(idUser);
        if(user!=null) {
            UserViewModel userViewModel = new UserViewModel(user);
            userRepository.deleteById(idUser);
            return userViewModel;
        }else return null;
    }

    @Override
    public UserViewModel marshalling(UserViewModel userViewModel) {
        System.out.println("marsh=====================");
        XStream xStream = new XStream(new DomDriver());
        xStream.alias(XMLfile, List .class);
        xStream.processAnnotations(UserViewModel.class);
        String xml = xStream.toXML(userViewModel);

        try {
            File file = new File(XMLfile + ".xml");
            if(!file.exists()){
                file.createNewFile();
            }
            BufferedWriter bufferedWriter = new BufferedWriter(new FileWriter(file,true));
            bufferedWriter.write(xml + "\n");
            bufferedWriter.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
        return userViewModel;
    }


}
