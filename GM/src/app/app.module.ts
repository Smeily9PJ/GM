import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';




import { Amis } from './amis/amis';
import { AmiService} from './amis/amis.service';

import { AppComponent } from './default/app.component';



import { AppRoutingModule } from './app.routes';
import { MesJdrComponent } from './mes-jdr/mes-jdr.component';
import { ListJdrHomeComponent } from './list-jdr-home/list-jdr-home.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
   declarations: [
     AppComponent,
     Amis,
     MesJdrComponent,
     ListJdrHomeComponent
   ],
  providers: [AmiService],
  bootstrap: [
    AppComponent]
})
export class AppModule { }
