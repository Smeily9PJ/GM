import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './default/app.component';

import { AppRoutingModule } from './app.routes';
import { MesJdrComponent } from './mes-jdr/mes-jdr.component';
import { ListJdrHomeComponent } from './list-jdr-home/list-jdr-home.component';
import { UserService } from './service/user.service';
import { JdrService } from './service/jdr.service';
import { AmiService } from './amis/amis.service';
import { DetailJdrComponent } from './detail-jdr/detail-jdr.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  declarations: [
    ListJdrHomeComponent,
     AppComponent,
     MesJdrComponent,
     DetailJdrComponent
   ],
  providers: [AmiService, UserService, JdrService],
  bootstrap: [
    AppComponent]
})
export class AppModule { }
