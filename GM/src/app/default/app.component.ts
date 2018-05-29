import { Component, OnInit, Input  } from '@angular/core';
import { Http } from '@angular/http'

import { UserService } from '../service/user.service';

import { User } from '../dto/user';

import { USERS } from '../mock/user.mock';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private _httpService: Http,
              private userService : UserService) { }
  apiValues: string[] = [];

  private ShowMenu: boolean = false;
  private ShowNotification: boolean = false;
  
  private utilisateurs: User[];
  public userSelect: User;

  private menu: string = "list-jdr-home";

  ngOnInit() {
    this._httpService.get('/api/values').subscribe(values => {
      this.apiValues = values.json() as string[];
    });

    this.getUsers();
    this.userSelect = this.utilisateurs[0];
  }

  getUsers(): void {
    this.utilisateurs = this.userService.getUsers();
  }

  private ShowAndHideMenu(): void {
    this.ShowMenu = !this.ShowMenu;
  }

  private ShowAndHideNotif(): void {
    this.ShowNotification = !this.ShowNotification;
  }
  
}
