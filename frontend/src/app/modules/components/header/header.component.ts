import {Component, OnInit, TemplateRef} from '@angular/core';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';
import {User} from '../../../models/user';
import {Role} from '../../../models/role';
import {UserServiceService} from '../../services/user-service.service';
import {RoleService} from '../../services/role.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  user: User;
  roles: Role[];
  subscriptions: Subscription[] = [];
  modalRef: BsModalRef;
  config = {
    animated: true
  };

  constructor(private modalService: BsModalService,
              private userService: UserServiceService,
              private roleService: RoleService) {
    this.user = new User();
  }

  ngOnInit() {
  }

  openModal(template: TemplateRef<any>) {
    this.setRoles();
    this.modalRef = this.modalService.show(template, this.config);
  }

  addUser(role): void {
    this.user.role = role.value;
    this.userService.save(this.user).subscribe(user => {
      if (user != null) {
        this.modalRef.hide();
      } else { alert('Error!'); }
    });
  }

  setRoles(): void {
    if (this.roles == null) {
      this.subscriptions.push(this.roleService.getRoles().subscribe(roles => {
        this.roles = roles as Role[];
      }));
    }
  }
}
