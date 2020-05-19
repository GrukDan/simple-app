import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Role} from '../../models/role';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  constructor(private http: HttpClient) {
  }

  public getRoles(): Observable<Role[]> {
    return this.http.get<Role[]>('/api/roles');
  }
}
