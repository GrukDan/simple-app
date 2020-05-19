package com.gruk.controllers;

import com.gruk.entities.Role;
import com.gruk.services.RoleService;
import com.gruk.services.servicesImpl.RoleServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.Mapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.sql.Array;
import java.util.List;

@RestController
@RequestMapping("/api")
public class RoleController {
    private RoleService roleService;
    private String CONFIGURATION_PATH = "context.xml";

    public RoleController(RoleServiceImpl roleService) {
        this.roleService = roleService;
    }


    @RequestMapping(value = "/roles", method = RequestMethod.GET)
    public Role[] getAll() {
        System.out.println(roleService.getAll().toString());
        List<Role> roles = roleService.getAll();
        return  roles.toArray(new Role[roles.size()]);
    }
}
