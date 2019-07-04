import { Component, OnInit } from '@angular/core';
import {ApiService} from '../app.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  private userGroupList;

  constructor(private apiService: ApiService) {
  }

  ngOnInit() {
    this.getUserGroups();
  }

  public getUserGroups() {
    this.apiService.getUserGroups().subscribe(res => {
      this.userGroupList = res;
      console.log('res', res);
    });
  }
}
