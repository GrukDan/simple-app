import {Component, OnInit, TemplateRef} from '@angular/core';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';
import {UserServiceService} from '../../services/user-service.service';
import {Subscription} from 'rxjs';
import {User} from '../../../models/user';
import {Router} from '@angular/router';

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.css']
})
export class FirstPageComponent implements OnInit {

  subscriptions: Subscription[];
  public templateShow: boolean;
  public userForAuth: User;
  modalRef: BsModalRef;
  config = {
    animated: true
  };
  constructor(private modalService: BsModalService,
              private userService: UserServiceService,
              private  router: Router) {
    this.templateShow = true;
    this.subscriptions = [];
    this.userForAuth = new User();
  }

  ngOnInit() {
  }


  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, this.config);
  }

   authorization(): void {
    this.subscriptions.push(this.userService.authorization(this.userForAuth).subscribe(authAccount => {
      if (authAccount == null) {
        alert('Ошибка авторизации!');
      } else {
        this.modalRef.hide();
        this.router.navigate(['/user']);
      }
    }));
  }
}
