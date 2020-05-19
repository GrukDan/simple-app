export class User {
  iduser: number;
  userName: string;
  userSurname: string;
  email: string;
  role: number;
  login: string;
  password: string;
  assignProject: number;
  static cloneBase(user: User): User {
    const clonedUser: User = new User();
    clonedUser.iduser = user.iduser;
    clonedUser.userName = user.userName;
    clonedUser.userSurname = user.userSurname;
    clonedUser.email = user.email;
    clonedUser.email = user.email;
    clonedUser.role = user.role;
    clonedUser.login = user.login;
    clonedUser.password = user.password;
    clonedUser.assignProject = user.assignProject;
    return clonedUser;
  }
}
