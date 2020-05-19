import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from '../components/header/header.component';
import {UsersTableComponent} from '../components/users-table/users-table.component';
import {UserServiceService} from '../services/user-service.service';
import {BsDropdownModule, CarouselModule, TabsModule} from 'ngx-bootstrap';
import {FormsModule} from '@angular/forms';
import {RoleService} from '../services/role.service';
import {StorageServiceModule} from 'angular-webstorage-service';
import {HttpClientModule} from '@angular/common/http';
import {FirstPageComponent} from '../components/first-page/first-page.component';
import {RouterModule} from '@angular/router';
import {LabsComponent} from '../components/labs/labs.component';
import {Ng4LoadingSpinnerModule} from 'ng4-loading-spinner';


@NgModule({
  declarations: [
    HeaderComponent,
    UsersTableComponent,
    FirstPageComponent,
    LabsComponent],
  imports: [
    CommonModule,
    TabsModule,
    BsDropdownModule,
    FormsModule,
    StorageServiceModule,
    HttpClientModule,
    RouterModule,
    CarouselModule,
    Ng4LoadingSpinnerModule,
  ],
  exports: [HeaderComponent, UsersTableComponent, FirstPageComponent, LabsComponent],
  providers: [UserServiceService, RoleService]
})
export class MyModule {
}
