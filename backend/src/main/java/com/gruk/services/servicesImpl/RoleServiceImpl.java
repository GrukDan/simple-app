package com.gruk.services.servicesImpl;

import com.gruk.entities.Role;
import com.gruk.repositories.RoleRepository;
import com.gruk.services.RoleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RoleServiceImpl implements RoleService {
    @Autowired
    private RoleRepository roleRepository;

    @Override
    public List<Role> getAll() {
        return (List<Role>) roleRepository.findAll();
    }

    @Override
    public Role getById(long id) {
        return null;
    }
}
