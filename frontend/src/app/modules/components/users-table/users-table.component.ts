import {Component, OnInit} from '@angular/core';
import {UserServiceService} from '../../services/user-service.service';
import {UserViewModel} from '../../../models/userViewModel';
import {Subscription} from 'rxjs';
import {User} from '../../../models/user';
import {Ng4LoadingSpinnerService} from 'ng4-loading-spinner';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.css']
})
export class UsersTableComponent implements OnInit {

  userViewModels: UserViewModel[];
  authAccount: UserViewModel;
  subscriptions: Subscription[];
  editUserVar: boolean;
  template = 'assets/load.gif';

  constructor(private userService: UserServiceService,
              private spinnerService: Ng4LoadingSpinnerService
  ) {
    this.authAccount = this.userService.getFromStorage();
    this.subscriptions = [];
    this.editUserVar = false;
  }

  ngOnInit() {
  }

  private getAllUserViewModels(): void {
    this.spinnerService.show();
    this.subscriptions.push(this.userService.getAllUserViewModels().subscribe(userViewModels => {
        this.userViewModels = userViewModels as UserViewModel[];
        setTimeout(() => {
            this.spinnerService.hide();
          }
          , 1000);
      })
    );
  }

  public saveChangedUser(): void {
    this.subscriptions.push(this.userService.saveChangedUserViewModel(this.authAccount).subscribe(changedUserViewModel => {
      this.authAccount = changedUserViewModel;
      this.editUserVar = !this.editUserVar;
    }));
  }

  public deleteUser(event: any): void {
    this.subscriptions.push(this.userService.deleteUserById(event.target.value).subscribe(() => {
      this.getAllUserViewModels();
    }));
  }
}
