import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './home.html',
  styleUrls: ['./home.scss']
})
export class Home implements OnInit {
  private ShowNotif: boolean = false;
  private ShowParam: boolean = false;
  private MenuActif: string = "HomeUser";


  constructor(private _httpService: Http) {
  }

  private goFriends(): void {
   //RouterLink.
  }

  private openNotif(): void {
    this.ShowNotif = !this.ShowNotif;
    window.setTimeout(function () {
      $("#draggableNotif").draggable({ containment: "body", cancel: ".content"});
    }, 100);
  }

  private openParam(): void {
    this.ShowParam = !this.ShowParam;
    window.setTimeout(function () {
      $("#draggableParam").draggable({ containment: "body", cancel: ".content" });
    }, 100);
  }

  ngOnInit() {
  }
}
