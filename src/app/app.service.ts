import { Injectable, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {User} from './user/user.model';
import {Observable} from 'rxjs';

@Injectable()
export class ApiService {
  public userData: User[] = [];

  constructor(private http: HttpClient) {}
  public getUserGroups(): Observable<any> {
    return this.http.get('./assets/UserGroups.json');

  }
}

