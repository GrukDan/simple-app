package com.gruk.repositories;

import com.gruk.entities.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends CrudRepository<User,Long> {

    User findByIduser(Long iduser);

    User save(User user);

    User findByLoginAndPassword(String login, String password);
}
