package com.gruk.entities;

import com.thoughtworks.xstream.annotations.XStreamAlias;

@XStreamAlias("UserViewModel")
public class UserViewModel {

    @XStreamAlias("id")
    private long iduser;

    private Integer role;

    @XStreamAlias("role")
    private String roleName;

    @XStreamAlias("user-name")
    private String userName;

    @XStreamAlias("user-surname")
    private String userSurname;

    @XStreamAlias("email")
    private String email;

    private Integer assignProject;


    public UserViewModel(User user){
        this.iduser = user.getIduser();
        this.role = user.getRole();
        this.userName = user.getUserName();
        this.userSurname = user.getUserSurname();
        this.email = user.getEmail();
        this.assignProject = user.getAssignProject();
        this.roleName = user.getRoleByRole().getRole();
    }

    public String getRoleName() {
        return roleName;
    }

    public void setRoleName(String roleName) {
        this.roleName = roleName;
    }

    public long getIduser() {
        return iduser;
    }

    public void setIduser(long iduser) {
        this.iduser = iduser;
    }

    public Integer getRole() {
        return role;
    }

    public void setRole(Integer role) {
        this.role = role;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getUserSurname() {
        return userSurname;
    }

    public void setUserSurname(String userSurname) {
        this.userSurname = userSurname;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Integer getAssignProject() {
        return assignProject;
    }

    public void setAssignProject(Integer assignProject) {
        this.assignProject = assignProject;
    }

    public UserViewModel(){}

    @Override
    public String toString() {
        return "UserViewModel{" +
                "iduser=" + iduser +
                ", role=" + role +
                ", roleName='" + roleName + '\'' +
                ", userName='" + userName + '\'' +
                ", userSurname='" + userSurname + '\'' +
                ", email='" + email + '\'' +
                ", assignProject=" + assignProject +
                '}';
    }

    public UserViewModel(long iduser, Integer role, String roleName, String userName, String userSurname, String email, Integer assignProject) {
        this.iduser = iduser;
        this.role = role;
        this.roleName = roleName;
        this.userName = userName;
        this.userSurname = userSurname;
        this.email = email;
        this.assignProject = assignProject;
    }
}
