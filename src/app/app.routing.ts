import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './components/list/list.component';
import { DisplayComponent } from './components/display/display.component';

const appRoutes = [
   {
       path: 'Home',
       component: ListComponent,
   },
   {
       path: 'Display',
       component: DisplayComponent,
   },
   {
       path: '',
       redirectTo: '/Home',
       pathMatch: 'full'
   },
   {
       path: '**',
       component: ListComponent,
   }
];

@NgModule({
   declarations: [

   ],
   imports: [
     BrowserModule,
     RouterModule.forRoot(appRoutes)
   ],
   exports: [ RouterModule ],
   providers: []
 })
 export class RoutingModule { }