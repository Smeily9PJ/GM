import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

import { Home } from '../home/home';

@Component({
  selector: 'friend-content',
  templateUrl: './amis.html',
  styleUrls: ['./amis.scss']
})
export class Amis implements OnInit {

  constructor(private _httpService: Http) {
  }

  ngOnInit() {
  }
}
