package com.gruk.services;

import com.gruk.entities.Role;

import java.util.List;

public interface RoleService {
    List<Role> getAll();
    Role getById(long id);
}
