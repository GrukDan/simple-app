import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {BsDropdownModule, ModalModule, TooltipModule} from 'ngx-bootstrap';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UsersTableComponent } from './modules/components/users-table/users-table.component';
import {RouterModule, Routes} from '@angular/router';
import {MyModule} from './modules/my-module/my.module';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { FirstPageComponent } from './modules/components/first-page/first-page.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { LabsComponent } from './modules/components/labs/labs.component';
import {Ng4LoadingSpinnerModule} from "ng4-loading-spinner";


const appRoutes: Routes = [
   {path: '', component: FirstPageComponent},
   {path: 'user', component: UsersTableComponent},
  {path: 'labs', component: LabsComponent},

];
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    MyModule,
    BrowserModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    AccordionModule.forRoot(),
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    TabsModule.forRoot(),
    CarouselModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
