// Imports
// Deprecated import
// import { provideRouter, RouterConfig } from '@angular/router';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './default/app.component';
//import { Amis } from './amis/amis';
//import { HomeUser } from './home_user/home_user';

// Route Configuration
export const routes: Routes = [
  {
    path: '',
    component: AppComponent
  },
  //{
  //  path: 'amis',
  //  component: Amis
  //}
  // Add dog routes form a different file
 // ...HomeUser
];

// Deprecated provide
// export const APP_ROUTER_PROVIDERS = [
//   provideRouter(routes)
// ];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
