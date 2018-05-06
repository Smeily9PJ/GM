import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private _httpService: Http) { }
  apiValues: string[] = [];

  private ShowMenu: boolean = false;
  private ShowNotification: boolean = false;
  
  ngOnInit() {
    this._httpService.get('/api/values').subscribe(values => {
      this.apiValues = values.json() as string[];
    });
  }

  private ShowAndHideMenu(): void {
    this.ShowMenu = !this.ShowMenu;
  }

  private ShowAndHideNotif(): void {
    this.ShowNotification = !this.ShowNotification;
  }
}
