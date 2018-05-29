import {
  Component, OnInit, Input,
  OnChanges, SimpleChanges, SimpleChange } from '@angular/core';

import { JdrService } from '../service/jdr.service';

import { JeuDeRole } from '../dto/jeuDeRole';
import { ParticipeJDR } from '../dto/participeJDR';
import { User } from '../dto/user';


import { JDRS } from '../mock/jeuDeRole.mock';
import { PARTICIPEJDRLIST } from '../mock/participeJDR.mock';

import { AppComponent } from '../default/app.component';

@Component({
  selector: 'app-list-jdr-home',
  templateUrl: './list-jdr-home.component.html',
  styleUrls: ['./list-jdr-home.component.scss']
})
export class ListJdrHomeComponent implements OnChanges, OnInit {
  private _user: User;
  
  private listeJDRUser: JeuDeRole[] = new Array();


  @Input() set user(user: User) {
    this._user = user;
  }

  constructor(private JdrService: JdrService) { }

  ngOnChanges(changes: SimpleChanges) {
    const user: SimpleChange = changes.user;
    this._user = user.currentValue;
    this.listeJDRUser = this.JdrService.getJDROfUser(this._user, true);
  }

  ngOnInit() {
    this.listeJDRUser = this.JdrService.getJDROfUser(this._user, true);
  }
  
}
