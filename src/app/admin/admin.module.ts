import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { RandomusersComponent } from './randomusers/randomusers.component';
import { CofeeComponent } from './cofee/cofee.component';
import { BearComponent } from './bear/bear.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AdminComponent,
    RandomusersComponent,
    CofeeComponent,
    BearComponent,
    
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
