import {Inject, Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {User} from '../../models/user';
import {UserViewModel} from '../../models/userViewModel';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';
import {LOCAL_STORAGE, WebStorageService} from 'angular-webstorage-service';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  private storageKey: string;

  constructor(private http: HttpClient, @Inject(LOCAL_STORAGE) private storage: WebStorageService) {
    this.storageKey = 'account';
  }

  public authorization(user: User): Observable<UserViewModel> {
    return this.http.post<UserViewModel>('/api/user/authorization', user)
      .pipe(
        tap(userViewModel => {
          if (userViewModel != null) {
            this.storage.set(this.storageKey, userViewModel);
          }
        })
      );
  }

  public save(user: User): Observable<User> {
    return this.http.post<User>('/api/user', user);
  }

  public getAllUserViewModels(): Observable<UserViewModel[]> {
    return this.http.get<UserViewModel[]>('/api/user');
  }

  public getFromStorage(): UserViewModel {
    return this.storage.get(this.storageKey);
  }

  public saveChangedUserViewModel(changedUserViewModel: UserViewModel): Observable<UserViewModel> {
    return this.http.post<UserViewModel>('/api/user/changed', changedUserViewModel)
      .pipe(
        tap(userViewModel => {
          if (userViewModel != null) {
            this.storage.set(this.storageKey, userViewModel);
          }
        })
      );
  }

  public deleteUserById(idUser: number): Observable<UserViewModel> {
    // @ts-ignore
    return this.http.delete('/api/user', {
      params: new HttpParams().set('id', String(idUser))
    });
  }

}
